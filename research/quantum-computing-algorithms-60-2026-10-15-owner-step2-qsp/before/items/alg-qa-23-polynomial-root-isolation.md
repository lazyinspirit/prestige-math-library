---
id: alg-qa-23-polynomial-root-isolation
kind: algorithm
title: Certified complex-polynomial root isolation in exact algebraic arithmetic
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - lem-qa-23-sturm-root-counting
  - lem-qa-23-polynomial-interval-sign-certificate
  - def-field
  - def-ordered-field
  - def-polynomial-ring-over-a-commutative-ring
  - def-polynomial-degree-leading-coefficient-and-monic
  - def-formal-derivative-of-a-polynomial
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-of-square-roots
  - lem-complex-conjugation-and-modulus-laws
  - thm-polynomial-division-algorithm-over-a-field
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - thm-complex-numbers-form-a-field
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
justified_by:
  - thm-qa-23-polynomial-root-isolation-correctness
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2, Sturm's Theorem"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Sturm's Theorem, EPFL lecture note"
      url: "https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf"
---

## Definition

The coefficient model is the exact algebraic model: coefficients and algebraic roots are represented by defining polynomials and rational isolators, with exact addition, multiplication, inversion of nonzero values, conjugation, equality, order, and real-sign decisions. Every such operation is charged as one exact algebraic operation. The algorithm makes no bit-complexity claim. A root descriptor consists of its defining square-free polynomial, an isolating rectangle containing exactly that root, and its multiplicity; exact algebraic operations refine these descriptors when needed.

`ROOTS(p,b)` takes a nonzero $p(z)=\sum_{j=0}^n a_jz^j\in\mathbb C[z]$ with rational or exact-algebraic coefficients and an integer $b\ge1$. The zero polynomial returns `INVALID`; a nonzero constant returns the empty root list.

1. Compute $g=\gcd(p,p')$ by monic Euclidean remainders and set $q=p/g$. The polynomial $q$ has each distinct root of $p$ exactly once.

2. If $n>0$, put $M=\max_{j<n}|a_j/a_n|$ and enumerate rational $B>1+M$ until the strict inequality is certified. Search rational $X,Y>B$ in increasing dyadic denominator and then lexicographic numerator order until the open rectangle $(-X,X)+i(-Y,Y)$ has no root on its boundary, each vertex value of $q$ has nonzero imaginary part, and the restriction of $\operatorname{Im}q$ to each directed edge is not the zero polynomial. The strict Cauchy bound puts every root inside every such rectangle.

3. To count a rectangle, first certify that its boundary is root-free: on each directed edge restrict $q$ to $F(t)=R(t)+iI(t)$, $0\le t\le1$, and use the exact polynomial gcd and Sturm count to decide whether $R$ and $I$ have a common zero there. Require also that every vertex has nonzero imaginary value and that no edge restriction $I$ is identically zero. If any condition fails for a proposed subdivision, enumerate rational vertical and horizontal cuts in the middle third of the corresponding side ranges, by increasing dyadic denominator and then lexicographic numerator, and use the first pair for which all four child rectangles satisfy these conditions.

4. On each directed edge of an admissible rectangle, isolate every distinct zero of $I$ in $(0,1)$ using the square-free Sturm sequence of $I$. There are no endpoint zeros because the vertices have nonzero imaginary value. At each isolated zero, the boundary-root certificate gives $R\ne0$; exact sign refinement decides whether $R>0$ or $R<0$. For $R>0$, add $+1$ if $I$ changes from negative to positive, add $-1$ if it changes from positive to negative, and add $0$ if it does not change sign. For $R<0$, add $0$. The sum over the four counterclockwise edges is the rectangle's distinct-root count.

5. Discard rectangles with count zero. If the count is one and $w_x^2+w_y^2\le2^{-2b}$, where $w_x,w_y$ are its rational side lengths, retain its open interior. Otherwise subdivide by Step 3 and recount the four children. The open interiors are pairwise disjoint and their root-free boundaries ensure no root is omitted or duplicated.

6. For each retained rectangle, find its original multiplicity as the least $m\ge1$ for which $q$ and $p^{(m)}$ have no common root in that rectangle. Test common-root membership by a gcd followed by the same certified rectangle count. This finite derivative test ends by $m=n$, since $p^{(n)}$ is a nonzero constant.

The same carrier supplies `REALROOTS(h)`, used for exact interval-sign checks. For a real nonzero polynomial $h\in K[x]$ with exact real-algebraic coefficients, replace it by its square-free part. Test and record roots at $-1$ and $1$ directly, and divide out each corresponding linear factor once when present; the residual square-free polynomial has root-free endpoints. Isolate its roots in $(-1,1)$ as follows: start with that open interval, use the Sturm variation drop to count roots, discard count-zero intervals, retain count-one intervals once their rational width is at most the requested threshold, and otherwise bisect at the first rational in the middle third that is not a root. Every interval endpoint is kept root-free. A zero polynomial is handled separately by the caller.

`SIGNCERT(h)` decides whether $h\ge0$ throughout $[-1,1]$. If $h=0$, accept. Otherwise check $h(-1),h(1)\ge0$, call `REALROOTS(h)`, and choose one rational sample in each open gap between consecutive root isolators and the endpoints (or $0$ if there are no roots). Accept exactly when every sample value is nonnegative. Exact algebraic comparisons determine all branches. `SIGNCERT` and `REALROOTS` use the same exact operation model and have no hidden numerical zero test.

This is a finite exact-algebraic procedure, not a polynomial-time bit algorithm. The root-separation, boundary-search, sign-certificate, Sturm, and winding-count proofs are supplied by [[thm-qa-23-polynomial-root-isolation-correctness]]. No arithmetic operation count implies a bit bound.
