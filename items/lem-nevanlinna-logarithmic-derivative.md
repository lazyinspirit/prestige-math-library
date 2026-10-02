---
id: lem-nevanlinna-logarithmic-derivative
kind: lemma
title: "The lemma on the logarithmic derivative"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-nevanlinna-exceptional-radius-notation
  - lem-borel-nevanlinna-growth-increment
  - lem-nevanlinna-poisson-jensen-derivative-bound
  - thm-ahlfors-shimizu-characteristic-identity
  - def-countable-choice
  - def-order-of-growth-meromorphic-function
  - thm-fundamental-theorem-of-algebra-liouville-proof
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, Theorem 1.3 and its proof, printed pp. 91–92: m(r,f′/f)=Q(r,f), with the finite-order and rational refinements"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: statement and consequences of the logarithmic-derivative lemma"
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§6, printed pp. 12–13: the lemma on the logarithmic derivative and its use in the Second Main Theorem"
verification:
  audited: 2026-10-02
---

## Statement

Assume Countable Choice. Let $f$ be a nonconstant meromorphic function on
$\mathbb C$ and $m_0(r,f'/f)=\frac1{2\pi}\int_0^{2\pi}\log^+|f'(re^{it})/f(re^{it})|dt$
the standard proximity of the logarithmic derivative. Then
$$ m_0(r,f'/f)=S(r,f), $$
and the same bound holds for the normalized chordal proximity of $f'/f$ to
$\infty$. If $f$ has finite order, then $m_0(r,f'/f)=O_f(\log r)$ for every
sufficiently large $r$ without exceptions; if $f$ is rational, then
$m_0(r,f'/f)=O_f(1)$ for every sufficiently large $r$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$; Countable Choice is assumed.

[F1] $S(r,f)$ denotes an error term bounded by $C(\log^+T(r,f)+\log r)$ for all large $r$ outside a measurable set of finite linear measure; the chordal proximity to infinity is $m(r,\infty;g)=\frac1{2\pi}\int_0^{2\pi}\frac12\log(1+|g(re^{it})|^2)dt$, and $|m(r,\infty;g)-m_0(r,g)|\le\frac12\log2$ ([[def-nevanlinna-exceptional-radius-notation]], [[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] Separated-radius Poisson–Jensen derivative bound: for $0<\alpha<1$ and $2\le r<R$, $m_0(r,f'/f)\le C_{f,\alpha}+C_\alpha\bigl(\log^+T(R,f)+\log R+\log^+\frac1{R-r}\bigr)$ ([[lem-nevanlinna-poisson-jensen-derivative-bound]]).

[F3] Finite-measure growth increment: applied to $u=T(\cdot,f)$ after increasing $r_0$ so that $T(r_0,f)\ge1$, for $\varepsilon=1$ there is a measurable $E$ of finite linear measure with $T\bigl(r+T(r,f)^{-2},f\bigr)<T(r,f)+1$ for every $r\notin E$, $r\ge r_0$ ([[lem-borel-nevanlinna-growth-increment]]).

[F4] Ahlfors–Shimizu: $T(r,f)=T_{\rm AS}(r,f)+C_\infty(f)$ with $T_{\rm AS}$ nondecreasing and convex in $\log r$, so $T(\cdot,f)$ is continuous and nondecreasing, and $T(r,f)>1$ for all sufficiently large $r$ ([[thm-ahlfors-shimizu-characteristic-identity]]).

[F6] Order is $\rho(f)=\limsup_{r\to\infty}\log T(r,f)/\log r$ ([[def-order-of-growth-meromorphic-function]]). If $\rho(f)<\infty$, then for every $\eta>0$ one has $T(r,f)\le r^{\rho(f)+\eta}$ for all sufficiently large $r$, by the definition of the upper limit. Consequently $f$ has finite order if and only if $\log^+T(r,f)=O(\log r)$; a bound $T(r,f)\le r^K$ eventually yields only $\rho(f)\le K$.

[F7] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]); repeated division by the corresponding linear factor gives a factorization into linear terms.

## Proof

**Proof technique:** apply the separated-radius derivative bound at $R=2r$ in finite order and at the Borel-increment radius $R=r+T^{-2}$ in infinite order, then handle rational functions by an explicit partial-fraction estimate.

1.1 (Reduction to the standard proximity) The two proximities differ pointwise by at most $\frac12\log2$, so a bound of the form $C(\log^+T(r,f)+\log r)$ for $m_0$ transfers to $m(r,\infty;f'/f)$ with the constant enlarged by $\frac12\log2$, and conversely; it suffices to bound $m_0$. [F1, algebra]

1.2 (Finite order, all radii) Let $f$ have finite order. Apply [F2] with $\alpha=\frac12$ and $R=2r$ for $r\ge2$: $\log^+T(2r,f)=O_f(\log r)$ by [F6], $\log R=\log2+\log r$, and $\log^+\frac1{R-r}=\log^+\frac1r=0$. Hence $m_0(r,f'/f)\le C_f+C\log r=O_f(\log r)$ for every $r\ge2$, with no exceptional set. [F2, F6, algebra]

1.3 (Infinite order, off a finite-measure set) Let $f$ have infinite order. By [F4] the function $T(\cdot,f)$ is continuous, nondecreasing and (for nonconstant $f$) unbounded, so [F3] applies with $\varepsilon=1$: there is a measurable $E$ of finite linear measure and $r_0$ with $T(r,f)>1$ and $T\bigl(r+T(r,f)^{-2},f\bigr)<T(r,f)+1$ for every $r\ge r_0$, $r\notin E$. Put $R:=r+T(r,f)^{-2}$, so $r<R\le2r$ and $\log^+\frac1{R-r}=2\log^+T(r,f)$. [F3, F4, algebra]

1.4 (Rational case, all large radii) Let $f=P/Q$ with coprime polynomials. By [F7], factor the nonconstant polynomials into linear terms; the product rule gives $P'/P=\sum_j m_j/(z-\zeta_j)$ and $Q'/Q=\sum_k n_k/(z-\xi_k)$, with an empty sum for a constant polynomial. At least one polynomial is nonconstant, so the finite union of their root sets is nonempty. For $r\ge\max\{2,2|\zeta_j|,2|\xi_k|\}$ each denominator satisfies $|z-\zeta_j|\ge r/2$ on $|z|=r$, so $|f'/f|\le 2(\deg P+\deg Q)/r$ there. Consequently $m_0(r,f'/f)\le\log^+\bigl(2(\deg P+\deg Q)/r\bigr)=O_f(1)$ at every sufficiently large radius, without exceptions. [F1, F7, algebra]

2.1 (Infinite order, estimate) For $r\ge r_0$, $r\notin E$, [F2] with $\alpha=\frac12$ gives $m_0(r,f'/f)\le C_f+C\bigl(\log^+T(R,f)+\log R+2\log^+T(r,f)\bigr)$; here $\log^+T(R,f)\le\log^+\bigl(T(r,f)+1\bigr)\le\log^+T(r,f)+1$ and $\log R\le\log r+\log2$. Hence $m_0(r,f'/f)\le C_f'+C'\bigl(\log^+T(r,f)+\log r\bigr)$ for all $r\notin E$. [F2, step 1.3, algebra]

3.1 (The $S$ statement) Combining steps 1.2 and 1.3 (the finite-order case has $E=\varnothing$), $m_0(r,f'/f)=S(r,f)$ in the sense of [F1]: in the infinite-order case the exceptional set has finite linear measure, in the finite-order case the bound holds at every sufficiently large radius. By step 1.1 the chordal proximity obeys the same bound. [F1, step 1.1, step 1.2, step 2.1]

4.1 (Conclusion) A nonconstant meromorphic function is either rational, with $m_0(r,f'/f)=O_f(1)$ at all large radii, or transcendental, of finite or infinite order, with $m_0(r,f'/f)=S(r,f)$ and the stated all-radius $O_f(\log r)$ refinement in the finite-order case. [step 3.1, step 1.4] ∎
