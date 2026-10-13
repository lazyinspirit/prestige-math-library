---
id: lem-three-dimensional-radial-carleman-integer-weight
kind: lemma
title: Three-dimensional radial Carleman inequality with integer weight
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [lem-em-spherical-harmonic-basis-and-addition, thm-plancherel, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-polar-coordinates-formula-for-lebesgue-measure, cor-one-dimensional-change-of-variables-with-absolute-derivative, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-weak-leibniz-rule-with-a-smooth-factor, lem-smooth-bump-between-concentric-euclidean-balls, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-laplacian-of-a-c2-function, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-countable-choice, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-divergence-and-curl-of-a-c1-vector-field, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, cor-first-green-identity-on-a-bounded-c-one-domain]
dependency_roles:
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "D. Tataru, Carleman estimates, unique continuation and applications (Northwestern University, 1998 monograph draft), Chapter 3.6: Theorem 3.50 with Remark 3.51 and Corollary 3.6.1 (singular-weight estimates for the Laplacian) and Theorem 3.52 (strong unique continuation)"
      url: "https://math.berkeley.edu/~tataru/papers/book.pdf"
    - title: "S. Dyatlov, Lecture notes for 18.155: Plancherel (Definition 11.22, Theorem 11.29) and the Fourier differentiation identities (Section 12.1)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), in the exact meaning of [[def-countable-choice]]. Let $s\ge1$ be an integer and put $\tau=s+1$. Write $r(x)=|x|$ for $x\in\mathbb R^3$ and let $\Delta$ be the Euclidean Laplacian ([[def-laplacian-of-a-c2-function]]). Then for every $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$, $$\|r^{-\tau}u\|_{L^2(\mathbb R^3)}\le\frac{2}{s}\,\|r^{-\tau+2}\Delta u\|_{L^2(\mathbb R^3)}.$$ Moreover, if $u\in H^2(\mathbb R^3)$ is compactly supported in an annulus $\{0<a\le|x|\le b\}$, then the weak second derivatives of $u$ exist as locally square integrable functions, $\Delta u$ denotes their sum in the weak sense ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]), and the same inequality holds for $u$. The weights $r^{-\tau}$ and $r^{-\tau+2}$ are bounded on every fixed compact annulus $\{a_0\le|x|\le b_0\}$ with $0<a_0\le b_0$, and this boundedness on the support of the function is the only property of the weights used in the density extension below; the weight $r^{-\tau}$ is unbounded at the origin for every $s\ge1$, and the weight $r^{-\tau+2}$ is unbounded at the origin for every $s\ge2$ and equals the constant $1$ for $s=1$. That is why the extension is stated for functions whose support stays away from $r=0$. The constant $2/s$ is explicit and is not claimed to be sharp.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]); an integer $s\ge1$ with $\tau=s+1$; first a function $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$, later a class $u\in H^2(\mathbb R^3)$ compactly supported in $\{0<a\le|x|\le b\}$.

[L1] Polar coordinates: for every Borel measurable $f:\mathbb R^3\to[0,\infty]$, $\int_{\mathbb R^3}f\,d\lambda_3=\int_0^\infty\int_{S^2}f(r\omega)r^{2}\,d\sigma(\omega)\,dr$, where $\sigma$ is the polar surface measure on $S^2$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[L2] One-dimensional substitution with the absolute derivative: if $\varphi$ is $C^1$ and injective with nonvanishing derivative on a neighbourhood of $[a,b]$ and $f$ is continuous on an interval containing $\varphi([a,b])$, then $\int_{\min\{\varphi(a),\varphi(b)\}}^{\max\{\varphi(a),\varphi(b)\}}f(y)\,dy=\int_a^bf(\varphi(x))|\varphi'(x)|\,dx$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[L3] The Laplacian is $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]), the divergence and gradient are the coordinate operators of [[def-divergence-and-curl-of-a-c1-vector-field]], and $\operatorname{div}(fF)=\langle\nabla f,F\rangle+f\operatorname{div}F$ for $C^1$ data ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[L4] Coordinate differentiation of the composites below uses the chain rule for total derivatives and the sum, scalar and product rules ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).

[L5] Spherical harmonics: the space $H_l$ of homogeneous harmonic polynomials of degree $l$ on $\mathbb R^3$ has dimension $2l+1$, harmonics of distinct degrees are orthogonal in $L^2(S^2,d\sigma)$ for the unnormalised surface measure of total mass $4\pi$, and the union over $l$ of their restrictions to $S^2$ admits a complete orthonormal basis of $L^2(S^2,d\sigma)$ ([[lem-em-spherical-harmonic-basis-and-addition]]).

[L6] Parseval for a complete orthonormal family: a family is complete if and only if $\sum_{i\in I}|\langle x,e_i\rangle|^2=\|x\|^2$ for every $x$, the sum being the supremum of finite subsums ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[L7] Fourier calculus in the $2\pi$ convention: Plancherel's theorem makes the Fourier transform a unitary isometry of $L^2$, and $\mathcal F(\partial_tu)(\xi)=2\pi i\xi\,\mathcal Fu(\xi)$ ([[thm-plancherel]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[L8] Tonelli's theorem: for a nonnegative measurable function on a $\sigma$-finite product space the iterated integrals agree; the counting measure on $\mathbb N_0^2$ is $\sigma$-finite ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L9] Between concentric balls $0<\rho<R$ there is a smooth bump equal to $1$ on $\overline B_\rho(0)$ with support in $B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L10] Under Countable Choice, $C_c^\infty(\mathbb R^3)$ is dense in $W^{2,2}(\mathbb R^3)=H^2(\mathbb R^3)$ in the Sobolev norm ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[L11] Weak Leibniz rule with a smooth factor: for smooth $\eta$ with bounded derivatives through order $k$ and $u\in W^{k,2}$, the product $\eta u$ belongs to $W^{k,2}$ with $D^\alpha(\eta u)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\eta)D^{\alpha-\beta}u$ for every $|\alpha|\le k$, and the weak derivatives are the almost-everywhere classes of these sums ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[L12] Weak derivatives and Sobolev spaces: the weak derivative is defined by the signed test identity, and $W^{k,p}$ consists of $L^p$ classes whose weak derivatives of every order at most $k$ are $L^p$ classes ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]).

[L13] First Green identity on a bounded $C^1$ domain: $\int(v\Delta u+\nabla v\cdot\nabla u)=\int_{\partial\Omega}v\partial_\nu u$ for real $C^2$ $u$ and $C^1$ $v$, under Countable Choice ([[cor-first-green-identity-on-a-bounded-c-one-domain]]); complex identities follow by real and imaginary parts.

**Choice accounting.** Countable Choice is used through [L10] (whose density statement carries it) and through [L6] and [L7] (the Parseval and Plancherel suppliers carry it); the coordinate computations, the polar-coordinate identity and the modal summation consume nothing beyond those suppliers.

## Proof

**Proof technique:** direct.

**Given:** The Axiom of Countable Choice, an integer $s\ge1$ with $\tau=s+1$, and first a smooth compactly supported $u$ on $\mathbb R^3\setminus\{0\}$.

1.1 **Change of variables.** Assume first $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$. The map $(t,n)\mapsto e^{-t}n$ is a diffeomorphism of $\mathbb R\times S^2$ onto $\mathbb R^3\setminus\{0\}$; since $u$ is smooth and compactly supported away from the origin, the functions $v(t,n):=e^{-t/2}u(e^{-t}n)$ and $w(t,n):=e^{st}v(t,n)$ are smooth and $w$ is compactly supported in $t$ uniformly in $n$. By [L1] with the substitution $r=e^{-t}$, whose derivative $|\mathrm dr/\mathrm dt|=e^{-t}=r$ is supplied by [L2], the measure becomes $dx=e^{-3t}\,dt\,d\sigma(n)$; writing $u(x)=e^{(1/2-s)t}w(t,n)$ gives $$r^{-2\tau}|u|^2\,dx=e^{2\tau t}e^{(1-2s)t}|w|^2e^{-3t}\,dt\,d\sigma=|w|^2\,dt\,d\sigma,$$ because $2\tau-2s-2=0$. Hence $\int_{\mathbb R^3}r^{-2\tau}|u|^2\,dx=\int_{\mathbb R}\int_{S^2}|w|^2\,d\sigma\,dt$. [L2, L1, L4]

1.2 **Spherical Laplacian and the polar form of $\Delta$.** For $g\in C^2(S^2)$ let $G(x):=g(x/|x|)$ be its degree-zero homogeneous extension to $\mathbb R^3\setminus\{0\}$ and define $\Delta_{S^2}g(n):=\Delta G(n)$ for $n\in S^2$. This is well defined: by the chain rule, $\Delta(G\circ m_t)=t^2(\Delta G)\circ m_t$ for every $t>0$ and every $C^2$ function on $\mathbb R^3\setminus\{0\}$, while $G\circ m_t=G$; hence $(\Delta G)(tn)=t^{-2}\Delta G(n)$, and $r^2\Delta G(rn)=\Delta G(n)$ does not depend on $r$, so the value at $r=1$ defines a function of $n$ alone. Define $\nabla_{S^2}g(n):=\nabla G(n)$, which is tangent because $n\cdot\nabla G(n)=0$; for a smooth tangential field $Y$ on $S^2$, define $\operatorname{div}_{S^2}Y(n):=\operatorname{div}\widetilde Y(n)$ with $\widetilde Y(x)=Y(x/|x|)$. For $\psi\in C^2((0,\infty))$ the product rule gives $\nabla(\psi(r)G(x))=\psi'(r)G(x)\,x/r+\psi(r)\nabla G(x)$, and $\langle\nabla G(x),x\rangle/r=\partial_rG=0$; using [L3] twice and the direct computation $\operatorname{div}(x/r)=\sum_i\partial_i(x_i/r)=3/r-r^2/r^3=2/r$, $$\operatorname{div}\bigl(\psi'G\tfrac xr\bigr)=\psi''G+\psi'G\tfrac2r,\qquad \operatorname{div}(\psi\nabla G)=\psi'\langle\tfrac xr,\nabla G\rangle+\psi\Delta G=\psi\,\Delta G,$$ so that $\Delta(\psi(r)G)=\bigl(\psi''(r)+\tfrac2r\psi'(r)\bigr)G+r^{-2}\psi(r)\Delta_{S^2}g(n)$, the last step using $\Delta G(rn)=r^{-2}\Delta_{S^2}g(n)$. In particular, for a harmonic homogeneous polynomial $H_l$ of degree $l$ and $h:=H_l|_{S^2}$, the identity with $\psi(r)=r^l$ and $G(x)=H_l(x)/|x|^l$ gives $0=\Delta H_l=r^{l-2}\bigl(l(l+1)h+\Delta_{S^2}h\bigr)$, hence $\Delta_{S^2}h=-l(l+1)h$. The same computation applied to a general $F\in C^2(\mathbb R^3\setminus\{0\})$ with $f(r,n):=F(rn)$, whose gradient splits as $\nabla F=(\partial_rf)\,n+r^{-1}\nabla_{S^2,n}f$ into radial and tangential parts, gives the general polar form $\Delta F(rn)=\partial_r^2f+\tfrac2r\partial_rf+r^{-2}\Delta_{S^2,n}f$; the divergence of a tangential field $Y$ with $Y(x)=\tilde Y(x/|x|)$ is $r^{-1}\operatorname{div}_{S^2}\tilde Y$ in these coordinates, and $\operatorname{div}_{S^2}\nabla_{S^2}=\Delta_{S^2}$. [L3, L4]

2.1 **The conjugated operator.** Apply the polar form of step 1.2 to $u(x)=r^{-1/2}v(t,n)$, $t=-\ln r$, whose radial part is $f(r,n)=r^{-1/2}v(-\ln r,n)$. Coordinate differentiation by [L4] gives $\partial_ru=-\tfrac12r^{-3/2}v-r^{-3/2}v_t$ and $\partial_r^2u=r^{-5/2}\bigl(v_{tt}+2v_t+\tfrac34v\bigr)$, so $$\partial_r^2u+\frac2r\partial_ru=r^{-5/2}\bigl(v_{tt}-\tfrac14v\bigr),$$ while $r^{-2}\Delta_{S^2,n}u=r^{-5/2}\Delta_{S^2}v$. Hence $$\Delta u=r^{-5/2}\bigl(v_{tt}+\Delta_{S^2}v-\tfrac14v\bigr).$$ Substituting $v=e^{-st}w$ gives $v_{tt}=e^{-st}(\partial_t-s)^2w$ and $\Delta_{S^2}v=e^{-st}\Delta_{S^2}w$, so with $L:=(\partial_t-s)^2+\Delta_{S^2}-\tfrac14$ one has $$\Delta u=r^{-5/2}e^{-st}\,Lw.$$ [step 1.2, L4]

2.2 **Modal decomposition.** For almost every $t$ the function $w(t,\cdot)$ is smooth on $S^2$, hence in $L^2(S^2,d\sigma)$, and by [L5] it expands as $w(t,\cdot)=\sum_{l,m}w_{lm}(t)Y_{lm}$ in a complete orthonormal basis $\{Y_{lm}\}$ of degree-$l$ spherical harmonics, the coefficients $w_{lm}(t)=\langle w(t,\cdot),Y_{lm}\rangle$ being smooth in $t$. For complex-valued $w$, apply the real harmonic basis expansion to its real and imaginary parts and combine the coefficients; orthogonality then gives the same complex $L^2$ expansion and absolute-square Parseval identity. By step 1.2, each $Y_{lm}$ satisfies $\Delta_{S^2}Y_{lm}=-l(l+1)Y_{lm}$, and $\Delta_{S^2}$ is symmetric for the surface pairing: extend two smooth sphere functions $g,h$ homogeneously with degree zero to the annulus $1<|x|<2$. Their normal derivatives vanish on both boundary spheres. Subtracting the two first Green identities [L13] gives $\int_{1<|x|<2}(H\Delta G-G\Delta H)=0$; using $\Delta G(rn)=r^{-2}\Delta_{S^2}g(n)$ and polar coordinates [L1], the radial factor is $\int_1^2dr=1$, so $\int_{S^2}(\Delta_{S^2}g)h\,d\sigma=\int_{S^2}g(\Delta_{S^2}h)\,d\sigma$. Applying this to the real and imaginary parts of $w(t,\cdot)$ and to $Y_{lm}$ gives the modal identity without any unproved surface integration formula, so the coefficients of $Lw$ against $Y_{lm}$ are exactly $(L_lw_{lm})(t)$; hence $$Lw(t,\cdot)=\sum_{l,m}(L_lw_{lm})(t)\,Y_{lm},\qquad L_l:=(\partial_t-s)^2-(l+\tfrac12)^2,$$ since $-l(l+1)-\tfrac14=-(l+\tfrac12)^2$. Parseval for the complete family at each $t$ [L6] and Tonelli's theorem against the counting measure on the index set [L8] give $$\int_{\mathbb R}\int_{S^2}|w|^2\,d\sigma\,dt=\sum_{l,m}\int_{\mathbb R}|w_{lm}|^2\,dt,\qquad \int_{\mathbb R}\int_{S^2}|Lw|^2\,d\sigma\,dt=\sum_{l,m}\int_{\mathbb R}|L_lw_{lm}|^2\,dt,$$ all terms being nonnegative; each $w_{lm}$ is smooth and compactly supported on $\mathbb R$, and $L_lw_{lm}$ is its second derivative combination, again compactly supported and square integrable. [L1, L5, L6, L8, L13, step 1.2]

2.3 **Fourier multiplier bound, mode by mode.** Fix $(l,m)$. In the $2\pi$ convention of [L7], the distributional Fourier transform of $L_lw_{lm}$ is the bounded continuous function $m_l\hat w_{lm}$ with symbol $m_l(\xi)=(2\pi i\xi-s)^2-(l+\tfrac12)^2$, and Plancherel gives $\|L_lw_{lm}\|_2^2=\int_{\mathbb R}|m_l(\xi)|^2|\hat w_{lm}(\xi)|^2\,d\xi$. Put $x=4\pi^2\xi^2\ge0$, $A=s-l-\tfrac12$ and $B=s+l+\tfrac12$. Then $s^2-(l+\tfrac12)^2=AB$ and $A^2+B^2+2AB=(A+B)^2=4s^2$, so $$|m_l(\xi)|^2=\bigl(AB-x\bigr)^2+4s^2x=\bigl(x+A^2\bigr)\bigl(x+B^2\bigr)\ge A^2B^2.$$ For integers $l\ge0$ and $s\ge1$ one has $|AB|=|s^2-(l+\tfrac12)^2|\ge s-\tfrac14$: on the range $l\le s-2$, nonempty only for $s\ge2$, the function $l\mapsto s^2-(l+\tfrac12)^2$ is decreasing, so $AB\ge s^2-(s-\tfrac32)^2=3s-\tfrac94\ge s-\tfrac14$; at $l=s-1$ and $l=s$ the values are $s-\tfrac14$ and $s+\tfrac14$; and on the range $l\ge s+1$ one has $|AB|=(l+\tfrac12)^2-s^2\ge(s+\tfrac32)^2-s^2=3s+\tfrac94\ge s-\tfrac14$. Since $s-\tfrac14\ge\tfrac s2$ for every $s\ge1$, conclude $|m_l(\xi)|^2\ge s^2/4$ for all $\xi$, and therefore $$\|w_{lm}\|_2\le\tfrac2s\|L_lw_{lm}\|_2 .$$ [L7, step 1.2]

3.1 **The weighted right-hand side.** Combining step 2.1 with the measure identity of step 1.1 gives $$r^{-2\tau+4}|\Delta u|^2\,dx=r^{-2\tau+4}\cdot r^{-5}e^{-2st}|Lw|^2\cdot r^{3}\,dt\,d\sigma =r^{2-2\tau}e^{-2st}|Lw|^2\,dt\,d\sigma=|Lw|^2\,dt\,d\sigma,$$ because $r^{2-2\tau}=e^{(2\tau-2)t}=e^{2st}$; hence $$\int_{\mathbb R^3}r^{-2\tau+4}|\Delta u|^2\,dx=\int_{\mathbb R}\int_{S^2}|Lw|^2\,d\sigma\,dt.$$ [step 2.1, step 1.1]

4.1 **Summation.** Squaring the mode-wise inequality of step 2.3, summing over all $(l,m)$ and inserting the two identities of step 2.2 and step 3.1 yields $$\int_{\mathbb R^3}r^{-2\tau}|u|^2\,dx=\sum_{l,m}\int |w_{lm}|^2\le\frac{4}{s^2}\sum_{l,m}\int |L_lw_{lm}|^2=\frac{4}{s^2}\int_{\mathbb R^3}r^{-2\tau+4}|\Delta u|^2\,dx,$$ which is the asserted inequality after taking square roots. Both sides are finite because $u$ is compactly supported in an annulus on which the two weights are bounded. [step 2.3, step 2.2, step 3.1]

5.1 **Density extension to $H^2$ functions supported in an annulus.** Now let $u\in H^2(\mathbb R^3)$ be compactly supported in $\{0<a\le|x|\le b\}$, so its weak derivatives through order two exist as locally square integrable functions and $\Delta u$ is their weak sum [L12]. By [L9] fix $\chi_0\in C_c^\infty(\mathbb R^3;[0,1])$ with $\chi_0=1$ on $\overline B_{a/4}(0)$ and $\operatorname{supp}\chi_0\subseteq B_{a/2}(0)$, and put $\chi:=1-\chi_0$; then $\chi$ is smooth, $\chi=0$ on $\overline B_{a/4}(0)$, $\chi=1$ outside $B_{a/2}(0)$, and $\chi u=u$ because $\chi=1$ on a neighbourhood of $\operatorname{supp}u$. By [L10] choose $u_k\in C_c^\infty(\mathbb R^3)$ with $u_k\to u$ in $W^{2,2}$; then $\chi u_k\in C_c^\infty(\mathbb R^3\setminus\{0\})$ with $\chi u_k\to\chi u=u$ in $W^{2,2}$, because the weak Leibniz expansion of [L11] through order two bounds $\|\chi(u_k-u)\|_{W^{2,2}}$ by a constant times $\|u_k-u\|_{W^{2,2}}$, and likewise $\Delta(\chi u_k)\to\Delta(\chi u)=\Delta u$ in $L^2$. Every $\chi u_k$ and every $\Delta(\chi u_k)=\chi\Delta u_k+2\langle\nabla\chi,\nabla u_k\rangle+(\Delta\chi)u_k$ is supported in $\{|x|\ge a/4\}$, as is $\Delta u$ because weak derivatives of a class supported in $\{a\le|x|\le b\}$ are supported there, and on $\{|x|\ge a/4\}$ the weights $r^{-\tau}$ and $r^{-\tau+2}$ are bounded by $(a/4)^{-\tau}$ and by $(a/4)^{-\tau+2}$ (the exponent $2-\tau\le0$). Applying step 4.1 to each $\chi u_k$ and passing to the limit in $$\|r^{-\tau}\chi u_k\|_2\le\tfrac2s\|r^{-\tau+2}\Delta(\chi u_k)\|_2$$ gives $\|r^{-\tau}u\|_2\le\tfrac2s\|r^{-\tau+2}\Delta u\|_2$, and the weak derivatives and weak Laplacian of $u$ are those named in the statement. [L9, L10, L11, L12, step 4.1] ∎
