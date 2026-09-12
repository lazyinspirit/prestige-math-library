---
id: "lem-carleson-restricted-weak-interpolation"
kind: "lemma"
title: "Carleson restricted weak interpolation"
deps: ["thm-layer-cake-formula-for-l-p-powers", "def-sublinear-operator-weak-and-strong-type-p-q", "def-carleson-tiles-wave-packets-and-tile-order", "thm-complex-holder-minkowski-and-the-quotient-norm", "thm-dominated-convergence", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lacey section 7 opening interpolation step
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume AC. If the uniformly linearised finite model operators are restricted weak type (r,r) and (s,s), with 1<r<p<s<infinity, they are strong type (p,p), uniformly in the selector and finite family.

## Facts & Assumptions

[F1] The layer-cake identity computes $\int|h|^q$ from the level-set measures, also when the integral is infinite [[thm-layer-cake-formula-for-l-p-powers]].

[F2] Weak and strong type have their distribution and norm meanings [[def-sublinear-operator-weak-and-strong-type-p-q]].

[F3] Each finite model is complex-linear and consists of finitely many Schwartz packet coefficients multiplied by measurable selector indicators [[def-carleson-tiles-wave-packets-and-tile-order]].

[F4] Complex Hölder and Minkowski hold, including on finite counting measure spaces [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F5] Dominated convergence holds [[thm-dominated-convergence]].

[F6] Assume AC [[def-axiom-of-choice]], as inherited by the finite packet construction and its Fourier interfaces.

## Proof

**Given:** $1<r<p<s<\infty$ and a finite model A. Restricted weak type means that there are constants $K_r,K_s$ independent of A such that for q=r,s, every measurable E with finite measure and every lambda>0 satisfies $m\{|A\mathbf1_E|>\lambda\}\le K_q^q\lambda^{-q}m(E)$. This interpretation uses only characteristic inputs; the stronger convention allowing bounded supported inputs also suffices.

1.1 For q>1 define the testing functional $N_q(h)=\sup_B m(B)^{-1+1/q}\int_B|h|$, where the supremum is over measurable B of finite positive measure. It is homogeneous and subadditive by the integral triangle inequality. If $m\{|h|>t\}\le(K/t)^q$, F1 with exponent one, applied on B, gives $\int_B|h|\le\int_0^\infty\min(m(B),(K/t)^q)dt=\frac q{q-1}K m(B)^{1-1/q}$. For K>0 split the integral at $t=K m(B)^{-1/q}$; for K=0 every positive level set is null and the bound is zero. Thus $N_q(h)\le q'K$, where $q'=q/(q-1)$. Conversely, if $N_q(h)=D<\infty$, apply the definition to $B=\{|h|>t\}\cap[-R,R]$. When its measure is positive, $t m(B)^{1/q}\le D$; when zero the same measure bound holds. Increasing R gives $m\{|h|>t\}\le(D/t)^q$. This proves both comparisons even if the original level set could have infinite measure. [F1, F2, given]

2.1 If u is a nonnegative simple function with $0\le u\le a\mathbf1_E$, list its finitely many positive values in increasing order. It is the sum of their successive nonnegative differences times the indicators of the corresponding superlevel sets. Each such set lies in E and the differences sum to at most a. Linearity and step 1.1 therefore give $N_q(Au)\le q'K_q a m(E)^{1/q}$ for q=r,s. A complex simple u with $|u|\le a\mathbf1_E$ is the sum of the positive and negative real parts and i times the positive and negative imaginary parts, each bounded by $a\mathbf1_E$. Hence $N_q(Au)\le4q'K_q a m(E)^{1/q}$. The same result is zero for null E because its indicator has zero output almost everywhere by the assumed restricted bound and linearity of the finite coefficient formula. [F3, step 1.1, given]

3.1 Let f be a complex simple function supported on a set of finite measure. Put $E_k=\{2^k<|f|\le2^{k+1}\}$, $m_k=m(E_k)$ and $f_k=f\mathbf1_{E_k}$. There are only finitely many nonempty E_k, they are disjoint, and $f=\sum_k f_k$ almost everywhere. For each integer n, split $f=f^{\rm high}_n+f^{\rm low}_n$ by summing over k>=n and k<n respectively. Subadditivity of the testing functional and step 2.1 give $N_r(Af^{\rm high}_n)\le C_r\sum_{k\ge n}2^k m_k^{1/r}$ and $N_s(Af^{\rm low}_n)\le C_s\sum_{k<n}2^k m_k^{1/s}$, with $C_q=8q'K_q$. Since $|Af|>2^n$ implies that one of the two pieces has magnitude greater than $2^{n-1}$, the converse comparison in step 1.1 bounds its level-set measure by $$m\{|Af|>2^n\}\le(2C_r)^r2^{-nr}\Bigl(\sum_{k\ge n}2^k m_k^{1/r}\Bigr)^r+(2C_s)^s2^{-ns}\Bigl(\sum_{k<n}2^k m_k^{1/s}\Bigr)^s.$$ [F3, step 1.1, step 2.1]

4.1 Set $b_k=2^{pk}m_k$. The sum over n of $2^{np}$ times the first term in step 3.1, apart from its constant, is $$\sum_{n\in\mathbb Z}\Bigl(\sum_{j\ge0}2^{-(p-r)j/r}b_{n+j}^{1/r}\Bigr)^r.$$ For nonnegative numbers x_j and summable nonnegative weights w_j, finite Hölder gives $(\sum_j w_jx_j)^r\le(\sum_jw_j)^{r-1}\sum_jw_jx_j^r$. Here $w_j=2^{-(p-r)j/r}$ has finite sum W_r because p>r. Applying this inequality, then summing over n, bounds the display by $W_r^r\sum_k b_k$. One may first use finite sets of n,j and then increase them: every summand is nonnegative and each shifted sum of the finitely supported b is at most $\sum_k b_k$. Likewise the second term gives $$\sum_{n\in\mathbb Z}\Bigl(\sum_{j\ge1}2^{-(s-p)j/s}b_{n-j}^{1/s}\Bigr)^s\le W_s^s\sum_k b_k,$$ where $W_s=\sum_{j\ge1}2^{-(s-p)j/s}<\infty$ since s>p. These are two explicit geometric sums, not an interpolation theorem used as an undeclared supplier. [F4, step 3.1]

5.1 Apply F1 to Af and split the positive t-axis into $[2^n,2^{n+1})$. Monotonicity of its level-set measure yields $\|Af\|_p^p\le(2^p-1)\sum_n2^{np}m\{|Af|>2^n\}$. The nonnegative sum is valid whether or not finiteness is known initially. Steps 3.1 and 4.1 bound it by $C\sum_k2^{pk}m_k\le C\int|f|^p$, because $|f|>2^k$ on E_k. Thus the strong bound is established for every finite-support simple f, with C depending only on r,p,s and the two restricted constants, not on the finite family or selector. [F1, step 3.1, step 4.1]

6.1 For general $f\in L^p(\mathbb R)$, the same finite model formula makes sense: each packet belongs to $L^{p'}$ and $L^p$ by its Schwartz decay, so F4 makes the coefficients absolute. More explicitly an exponent M with Mp>1 and Mp'>1 gives integrable powers of the packet bound. For every integer $j\ge1$ define $Q_j(t)=\operatorname{sgn}(t)\lfloor j\min(|t|,j)\rfloor/j$, with $\operatorname{sgn}(0)=0$, and put $f_j=\mathbf1_{[-j,j]}(Q_j(\operatorname{Re}f)+iQ_j(\operatorname{Im}f))$. Each component of $f_j$ takes only the $2j^2+1$ values $k/j$ with $|k|\le j^2$, so $f_j$ is a simple measurable function supported on a finite-measure set. Componentwise rounding toward zero gives $|f_j|\le|f|$, while $f_j\to f$ almost everywhere. Hence $|f_j-f|^p\le2^p|f|^p$, and F5 gives $\|f_j-f\|_p\to0$. Hölder gives convergence of every packet coefficient; more strongly, the triangle inequality and selector bound give $$\|Af_j-Af\|_p\le\sum_{u\in S}\|\phi_u\|_p\|\phi_u\|_{p'}\|f_j-f\|_p\longrightarrow0.$$ This finite auxiliary sum may depend on S; it is used only to identify the limit, not in the uniform estimate. Pass to the limit in step 5.1 using Minkowski's norm continuity to obtain the stated uniform strong bound. Empty finite families, zero simple functions and zero endpoint constants are covered without division by them. The strict inequalities r<p<s are exactly what makes the two geometric weights summable; no endpoint weak-to-strong inference is made. AC is inherited as identified in F6. This conditional interpolation proof does not assume that the Hunt restricted estimates have already been proved. [F3, F4, F5, F6, step 5.1] ∎
