---
id: ex-cft-sl2-principal-admissible-reduction-data
kind: example
title: The sl2 principal admissible reduction data at level minus one half
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - def-cft-nilpotent-element-in-simple-lie-algebra
  - def-cft-root-data-for-principal-w-levels
  - def-cft-w-algebra-good-grading
  - def-cft-slodowy-slice
  - def-cft-principal-admissible-level
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  def-cft-nilpotent-element-in-simple-lie-algebra: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-cft-w-algebra-good-grading: mathematical-premise
  def-cft-slodowy-slice: mathematical-premise
  def-cft-principal-admissible-level: mathematical-premise
generation:
  role: example
domain: mathematics
library: mathematics
physical_scope: "A finite exact matrix and root-data computation for sl2 over C. It verifies a principal nilpotent, its chosen good grading and Slodowy slice, and the level k=-1/2 admissibility inequalities; it asserts no BRST cohomology, PBW theorem, simple W quotient, rationality, or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Exercise 9.6, the sl2 matrices and charged-ghost reduction convention; §7.2, Slodowy slice.
    - title: "Tomoyuki Arakawa, Rationality of W-algebras: principal nilpotent cases"
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Theorem 10.2, rank-one principal-admissible level test.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

In $\mathfrak{sl}_2(\mathbb C)$ set
$$e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$
Use the invariant form $(X|Y)=\operatorname{tr}(XY)$, the positive root $\alpha$ with $\alpha(h)=2$, and the grading element $h/2$. The chosen triple is $(e,h,f)$, the degree-$1$ space is $\mathbb Ce$, the degree-$0$ space is $\mathbb Ch$, the degree-$-1$ space is $\mathbb Cf$, and $\mathfrak g_{1/2}=0$. Its Slodowy slice is $f+\mathbb Ce$. For this root datum $h=h^\vee=2$, $r^\vee=1$, and the Langlands-dual root datum is the same. Taking $p=3$, $q=2$ gives $k=-2+3/2=-1/2$, which satisfies the first nondegenerate principal-admissible level test.

Here “principal” means nilpotent with centralizer dimension equal to $\operatorname{rank}\mathfrak g$.

```tikz
\begin{tikzpicture}[>=stealth,node distance=2.6cm]
\node (f) {$f\quad(h\mbox{-weight }-2)$};
\node (h) [right of=f] {$h\quad(h\mbox{-weight }0)$};
\node (e) [right of=h] {$e\quad(h\mbox{-weight }2)$};
\draw[->] (f) -- node[above] {$\mathop{\mathrm{ad}}e$} (h);
\draw[->] (h) -- node[above] {$\mathop{\mathrm{ad}}e$} (e);
\end{tikzpicture}
```

The arrows show the adjoint action of $e$ on the three weight spaces; their coefficients are $[e,f]=h$ and $[e,h]=-2e$. The picture records the weights and actions only; the verification below is by matrix multiplication.

## Facts & Assumptions

**Given:** The displayed matrices, trace form, and conventions of [[def-cft-finite-dimensional-simple-lie-algebra]], [[def-cft-nilpotent-element-in-simple-lie-algebra]], [[def-cft-root-data-for-principal-w-levels]], [[def-cft-w-algebra-good-grading]], [[def-cft-slodowy-slice]], and [[def-cft-principal-admissible-level]].

[F1] [[def-cft-finite-dimensional-simple-lie-algebra]]: simple means nonabelian with no nonzero proper ideals.

[F2] [[def-cft-nilpotent-element-in-simple-lie-algebra]]: $f$ is nilpotent when $\operatorname{ad}f$ is nilpotent.

[F3] [[def-cft-w-algebra-good-grading]]: a good grading has $f\in\mathfrak g_{-1}$, with $\operatorname{ad}f$ injective in degrees $j\ge1/2$ and surjective in degrees $j\le1/2$; the form $\omega_f$ on degree $1/2$ determines the isotropic datum.

[F4] [[def-cft-slodowy-slice]]: for a chosen triple, $S_f=f+\mathfrak g^e$.

[F5] [[def-cft-root-data-for-principal-w-levels]] and [[def-cft-principal-admissible-level]]: the normalized root data and the two arithmetic level tests have the conventions stated above. The dual datum here is verified directly, so no general dual-realization theorem is used.

## Proof


1.1 Direct multiplication gives $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$. Thus the three matrices are linearly independent and span the traceless $2\times2$ matrices. The algebra is nonabelian. [given, F1, algebra]

2.1 Let $I$ be an ideal and $X=ae+bh+cf\in I$. Since $I$ is stable under $\operatorname{ad}h$, it is stable under polynomials in that operator. The eigenvalues on $e,h,f$ are $2,0,-2$; the polynomials $$\frac{A(A+2)}8,\qquad 1-\frac{A^2}4,\qquad \frac{A(A-2)}8,\quad A=\operatorname{ad}h,$$ project onto the $e,h,f$ lines, respectively. If $I$ is nonzero, one of these projections puts a nonzero multiple of one of $e,h,f$ in $I$. Bracketing that element with the other two basis elements using step 1.1 puts all three in $I$. Therefore $I=\mathfrak{sl}_2$, proving simplicity. [F1, step 1.1, algebra]

2.2 The brackets are $[f,e]=-h$, $[f,h]=2f$, and $[f,f]=0$, so $(\operatorname{ad}f)^3=0$. Hence $f$ is nilpotent by [F2]. The relations in step 1.1 also verify the chosen Jacobson-Morozov triple directly, without invoking its general existence theorem. [F2, step 1.1, algebra]

2.3 By step 1.1, $\operatorname{ad}h$ is diagonal on the basis $e,h,f$ with eigenvalues $2,0,-2$. Its zero eigenspace is $\mathbb Ch$, so $\operatorname{ad}h$ is diagonalizable and the centralizer of $\mathbb Ch$ is itself; hence $\mathbb Ch$ is a Cartan subalgebra of rank $1$. The two nonzero weights are $\alpha$ and $-\alpha$ with $\alpha(h)=2$. For $X=ae+bh+cf$, $[f,X]=-ah+2bf$, so $\mathfrak g^f=\mathbb Cf$ and has dimension $1$. Thus $f$ is principal under the stated convention. [F5, step 1.1, algebra]

2.4 Since $\operatorname{ad}(h/2)$ has eigenvalues $1,0,-1$ on $e,h,f$, the displayed grading is a Lie grading. The only nonzero required map with $j\ge1/2$ is $\operatorname{ad}f:\mathbb Ce\to\mathbb Ch$, $e\mapsto-h$, which is injective. For $j\le1/2$, the nonzero target cases are $\mathbb Ch\to\mathbb Cf$, $h\mapsto2f$, which is surjective, and $\mathbb Cf\to0$, which is also surjective. All other graded pieces are zero. Since $\mathfrak g_{1/2}=0$, its skew form is nondegenerate on the zero space and the unique Lagrangian is $\ell=0$. Thus the grading is good and $\mathfrak m=\mathbb Ce$. [F3, step 1.1, algebra]

2.5 For $X=ae+bh+cf$, $[e,X]=-2be+ch$. This vanishes exactly when $b=c=0$, so $\mathfrak g^e=\mathbb Ce$. By [F4], $S_f=f+\mathbb Ce$. [F4, step 1.1, algebra]

3.1 The trace form has $(h|h)=2$ and $(e|f)=1$, so $\alpha$ has squared length $2$ and $\alpha^\vee=h$. Thus $\theta=\alpha$, $\rho=\alpha/2$, $h=1+\operatorname{ht}(\alpha)=2$, and $h^\vee=1+\rho(h)=2$. The coroot root set is again $\{\alpha,-\alpha\}$, so its dual datum has $h^\vee_{\widetilde{\mathfrak g}}=2$; there are no off-diagonal Cartan entries, giving $r^\vee=1$. [F5, step 2.3, algebra]

4.1 With $p=3,q=2$, $\gcd(p,q)=1$ and $\gcd(q,r^\vee)=\gcd(2,1)=1$. The first branch requires $p\ge h^\vee$ and $q\ge h$; both hold because $3\ge2$ and $2\ge2$. Thus $k=-h^\vee+p/q=-2+3/2=-1/2$, and $k+h^\vee=3/2>0$. This verifies the declared level condition and noncriticality. [F5, step 3.1, algebra] ∎

## Proof status

Every claim in this example is checked directly for the explicit rank-one data. It uses the general definitions only at their stated interfaces and makes no claim about the BRST cohomology or W-algebra representation theory.
