---
id: lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi
kind: lemma
title: Full local chiral Jacobi from vertex Jacobi in the right D convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-formal-distribution-on-a-vector-space
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: 'Sections3.1.1–3.1.2 and3.1.12,3.3.1–3.3.3,3.5.10 and3.5.13–3.5.15. The full polar operation and its three-input residue identity are reconstructed below; the singular restriction alone is not substituted for a chiral operation.'
dependency_level: 1
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type, with translation $T=L(-1)$ and ordinary non-super state fields $Y(a,u)b=\sum_{k\in\mathbb Z}(a_{(k)}b)u^{-k-1}$. Put $V_{\le N}:=\bigoplus_{0\le d\le N}V_d$ and $V\llbracket y\rrbracket_{\mathrm{fin}}:=\bigcup_{N\ge0}V_{\le N}\llbracket y\rrbracket$. On a formal disc use the left connection $\partial_t+T$ and its right conversion $A^r=V\llbracket t\rrbracket_{\mathrm{fin}}dt$, with $(v(t)dt)\cdot\partial_t=-(\partial_tv+Tv)dt$. All state-valued coefficients below lie in some finite stage; the union of the stages is understood.

For two input points put $u=t_1-t_2$, $y=t_2$, and define the scalar local ring of formal functions with a finite pole on the diagonal by
$$R_2:=\mathbb C\llbracket t_1,t_2\rrbracket[(t_1-t_2)^{-1}]=\mathbb C\llbracket y,u\rrbracket[u^{-1}].$$
The localized two-input right-$\mathcal D$ module is the union over $N\ge0$ of $(V_{\le N}\otimes V_{\le N})\otimes_\mathbb C R_2\,dt_1\boxtimes dt_2$, with action on pure sections
$$\bigl(f(a\,dt_1\boxtimes b\,dt_2)\bigr)\cdot\partial_{t_1}=-(f_{t_1}(a\,dt_1\boxtimes b\,dt_2)+f(Ta\,dt_1\boxtimes b\,dt_2))$$
and
$$\bigl(f(a\,dt_1\boxtimes b\,dt_2)\bigr)\cdot\partial_{t_2}=-(f_{t_2}(a\,dt_1\boxtimes b\,dt_2)+f(a\,dt_1\boxtimes Tb\,dt_2)).$$
Here $f_{t_i}$ is the formal partial derivative in $t_i$, holding the other coordinate fixed.
Model the local diagonal direct image by finite principal parts
$$Q_2:=\left\{\sum_{j=0}^{J}c_j(y)u^{-j-1}:J<\infty,\ c_j\in V\llbracket y\rrbracket_{\mathrm{fin}}\right\},\qquad \operatorname{PP}_u\left(\sum_i c_i(y)u^i\right):=\sum_{i<0}c_i(y)u^i.$$
The term $c(y)u^{-j-1}$ represents $c(y)\partial_{t_2}^j\delta(t_1,t_2)/j!$ with the canonical output one-form factor. Regular-function multiplication on $Q_2$ is followed by $\operatorname{PP}_u$. Its right derivative actions are
$$q\cdot\partial_{t_1}=-\partial_uq,\qquad q\cdot\partial_{t_2}=-\partial_yq+\partial_uq-Tq,$$
where $\partial_y$ holds $u$ fixed.
For $f\in R_2$ and $a,b\in V$, define
$$\mu_t\bigl(f(a\,dt_1\boxtimes b\,dt_2)\bigr)=\operatorname{PP}_u\bigl(f(y+u,y)Y(a,u)b\bigr).$$
Extend this formula linearly to the full localized two-input module. It defines a right-$\mathcal D$-linear operation from that module to $Q_2$. It satisfies the three-input Beilinson–Drinfeld chiral Jacobi identity, skew-symmetry and the unit axiom for $\mathbf1\,dt$. Its value on regular constant inputs is exactly
$$\mu_t(a,b)=\sum_{j\ge0}(a_{(j)}b)\frac{\partial_{t_2}^j\delta(t_1,t_2)}{j!}.$$
For every integer $k$, including $k<0$, its polar values are
$$\mu_t(u^ka,b)=\sum_{j\ge0}(a_{(j+k)}b)\frac{\partial_{t_2}^j\delta(t_1,t_2)}{j!}.$$
Thus the full chiral operation uses all vertex products; its regular restriction alone is the singular, or Lie-star, bracket. No independent chiral-Jacobi hypothesis is assumed.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-state-field]]

[[def-formal-distribution-on-a-vector-space]]

[[lem-cft-locality-to-jacobi-residue-calculus]]

## Facts & Assumptions

**Given:** The algebra, connection, right conversion and formal-coordinate conventions in the Statement. Multiplication by regular functions on principal parts means multiplication followed by projection; the operation is not asserted linear over the ring in which $u$ is invertible. All residues and expansions are formal.

[F1] [[def-vertex-algebra-state-field]] supplies truncation, creation, translation covariance and locality.

[F2] [[def-conformal-vertex-algebra]] gives $T=L(-1)$, nonnegative integral state weights and finite-dimensional weight stages.

[F3] [[def-formal-distribution-on-a-vector-space]] fixes formal residues, generalized binomial expansions and the delta distribution.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] proves the full adjoint vertex Jacobi identity from these axioms, the translation identity $Y(Ta,u)=\partial_uY(a,u)$, and the state-product weight rule. Its actual three-variable identity, not merely its commutator special case, is used below.

## Proof

1.1 On $Q_2$, the derivative operators $-\partial_u$ and $-\partial_y+\partial_u-T$ commute because $T$ commutes with formal-variable differentiation. Together with multiplication by $t_1=y+u$ and $t_2=y$ followed by $\operatorname{PP}_u$, they satisfy the right Leibniz rules for the two coordinates; coefficientwise continuity extends these rules from polynomials to formal power series. Thus the displayed actions define the local right-$\mathcal D$-module structure on finite principal parts. The normal generator $u^{-1}$ is killed by $u$, and repeated right normal derivatives give $u^{-1}\cdot\partial_{t_1}^j=j!u^{-j-1}$. Under the displayed delta identification, $u\,\partial_{t_2}^j\delta=j\partial_{t_2}^{j-1}\delta$ and $\partial_{t_1}\delta=-\partial_{t_2}\delta$, so the normal-derivative signs agree with the right actions in the Statement. The tangent action $\partial_{t_1}+\partial_{t_2}$ is $-(\partial_y+T)$ on coefficients. This also fixes the canonical-bundle normalization: the class of $u^{-1}dt_1\boxtimes dt_2$ has residue $dt_2$, since $dt_1\wedge dt_2=du\wedge dy$. [given, F3, algebra, construct]

2.1 For fixed $a,b$ and a finite pole order of $f$, truncation makes $fY(a,u)b$ have only finitely many negative powers. Each coefficient involves only finitely many Taylor coefficients of $f$, and the weight rule bounds their state weights. Thus its principal part lies in $Q_2$. Regular-function multiplication commutes with this projection, giving the required regular-function linearity. On a source $f(a\boxtimes b)$ the first right derivative is $-f_{t_1}(a\boxtimes b)-f(Ta\boxtimes b)$. Its image is $-\operatorname{PP}_u\partial_u(fY(a,u)b)$ by [F4], exactly the first target action. For the second derivative, write $f_{t_2}=f_y-f_u$. Translation covariance gives $T(Y(a,u)b)=\partial_uY(a,u)b+Y(a,u)Tb$. Consequently its image is $-\operatorname{PP}_u((f_y-f_u)Y(a,u)b+fY(a,u)Tb)$, equal to $(-\partial_y+\partial_u-T)\operatorname{PP}_u(fY(a,u)b)$. These computations prove both right derivative compatibilities, hence full right-$\mathcal D$ linearity. Extracting the coefficient of $u^{-j-1}$ gives the two formulas in the Statement. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Locality applied to the vacuum and translation covariance give $u^NY(a,u)b=u^Ne^{uT}Y(b,-u)a$ after clearing a common pole. Multiplication by $u^N$ is injective on Laurent series, so $Y(a,u)b=e^{uT}Y(b,-u)a$. To express the reversed output at the original second point, the base change from the first point multiplies its state by $e^{uT}$: differentiating $e^{uT}$ verifies the connection $\partial+T$. Reversing the two normal coordinates contributes a minus sign to principal parts in the right direct image. Explicitly $\partial_{t_1}^j\delta=(-1)^j\partial_{t_2}^j\delta$, whereas $(-u)^{-j-1}=(-1)^{j+1}u^{-j-1}$; their ratio is $-1$. Therefore the reversed operation is $-\operatorname{PP}_u(f e^{uT}Y(b,-u)a)=-\mu_t(fa,b)$, proving the exact right-$\mathcal D$ skew-symmetry. For the unit, $T\mathbf1=0$ makes $f\,dt\mapsto f\,dt\otimes\mathbf1$ a right-$\mathcal D$-module map. The vacuum identity $Y(\mathbf1,u)b=b$ gives $\mu_t(f\mathbf1,b)=\operatorname{PP}_u(fb)$. This is the canonical residue quotient $j_*j^*(\omega\boxtimes A^r)/(\omega\boxtimes A^r)\to\Delta_!A^r$, and in particular $\mu_t(u^{-1}\mathbf1,b)=b\delta$. The other slot follows either by the same calculation with $Y(a,u)\mathbf1=e^{uT}a$ or by skew-symmetry. Vanishing on regular unit inputs does not replace this polar unit identity. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 For three points use $z=t_3$, $x=t_1-t_3$, $y=t_2-t_3$ and $u=x-y$. The scalar local ring of functions with finite poles along the three pairwise diagonals is $R_3=\mathbb C\llbracket z,x,y\rrbracket[x^{-1},y^{-1},(x-y)^{-1}]$. In the expansions below, $x^{-1}$ and $y^{-1}$ retain their Laurent meanings, and powers of $x-y$ use the two $\iota$ expansions fixed by [F3]. The full diagonal target has finite normal-derivative decomposition $\sum_{p,q\ge0}c_{pq}(z)x^{-p-1}y^{-q-1}$ with only finitely many nonzero terms and $c_{pq}(z)\in V\llbracket z\rrbracket_{\mathrm{fin}}$; its coefficient of $x^{-1}y^{-1}$ will be called the constant-normal coefficient. For a localized input $f\in R_3$ and states $a,b,c\in V$, the constant-normal coefficients of the three ordered composites are respectively
$$C_{1|23}:\quad\operatorname{Res}_x\operatorname{Res}_y\iota_{x,y}(f)Y(a,x)Y(b,y)c,$$
$$C_{2|13}:\quad\operatorname{Res}_y\operatorname{Res}_x\iota_{y,x}(f)Y(b,y)Y(a,x)c,$$
$$C_{12|3}:\quad\operatorname{Res}_y\operatorname{Res}_u\iota_{y,u}f(y+u,y)Y(Y(a,u)b,y)c.$$
Here $C_{1|23}$ means first composing points2,3 and then point1 with their output, and the other subscripts have the analogous meaning. To verify these formulas, Taylor-expand the functions transverse to the first collapsed diagonal; its $j$th Taylor coefficient pairs with the normalized $j$th delta derivative in step 2.1. The resulting outer principal part then extracts the second residue. The first collapse in $C_{1|23}$ expands $y$ relative to $x$, the first collapse in $C_{2|13}$ expands $x$ relative to $y$, and the first collapse in $C_{12|3}$ expands $u$ relative to $y$. Thus these are different expansions and their iterated residues must not be naively interchanged. The change $(u,y)\mapsto(x=u+y,y)$ has determinant1, so the last expression has the same ordered normal orientation. With the skew sign from step 3.1, the cyclic Lie-Jacobi sum $[\,[1,2],3]+[\,[2,3],1]+[\,[3,1],2]$ is exactly $C_{12|3}-C_{1|23}+C_{2|13}$ in this fixed input order. [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Test the coefficient formulas on every rational monomial $f=x^my^k(x-y)^n$, with $m,k,n\in\mathbb Z$. The full vertex Jacobi identity in [F4], multiplied by $x^my^ku^n$ and integrated in its three variables, gives
$$\sum_{i\ge0}\binom mi(a_{(n+i)}b)_{(m+k-i)}c=\sum_{i\ge0}(-1)^i\binom ni\left(a_{(m+n-i)}(b_{(k+i)}c)-(-1)^n b_{(n+k-i)}(a_{(m+i)}c)\right).$$
Indeed on its iterate delta one substitutes $x=y+u$ and expands $(y+u)^m=\sum_i\binom mi y^{m-i}u^i$, yielding the left side. The two ordered delta terms use $\iota_{x,y}(x-y)^n$ and $\iota_{y,x}(x-y)^n$, yielding the two right-side sums and the sign $(-1)^n$. Each sum is finite separately: respectively $a_{(n+i)}b$, $b_{(k+i)}c$, and $a_{(m+i)}c$ vanish for sufficiently large $i$. These are exactly the three residues in step 4.1. Hence the constant-normal coefficient of the full cyclic sum is zero for every rational monomial, with the declared right-$\mathcal D$ signs. [F1, F3, F4, step 4.1, algebra]

6.1 The constant-normal test determines the entire three-input map. Multiplying its input by $x^py^q$, $p,q\ge0$, multiplies its output by that same regular function by step 2.1. In the finite normal basis, the resulting constant-normal coefficient is exactly the original coefficient of $x^{-p-1}y^{-q-1}$. These functions merely shift $m$ and $k$ in step 5.1, so every normal coefficient of Jacobi vanishes. Every $f\in R_3$ is a finite sum of rational monomials $x^my^k(x-y)^n$ times regular power series in $x,y,z$: choose a common denominator $x^Ay^B(x-y)^C$ and expand its numerator. For homogeneous input states, a normal test of degree $p+q$ after the monomial $x^my^k(x-y)^n$ has state weight $\operatorname{wt}a+\operatorname{wt}b+\operatorname{wt}c-m-k-n-p-q-2$. Nonnegative state weights imply that only finitely many normal Taylor coefficients can contribute; bounded weight filtration stages give the same bound for arbitrary sections. Thus the identities extend coefficientwise to the full formal localized source, not just Laurent polynomials. This proves full local three-input chiral Jacobi, together with the right-$\mathcal D$ skew and polar unit identities already proved. [F1, F2, F3, step 2.1, step 4.1, step 5.1, algebra] ∎
