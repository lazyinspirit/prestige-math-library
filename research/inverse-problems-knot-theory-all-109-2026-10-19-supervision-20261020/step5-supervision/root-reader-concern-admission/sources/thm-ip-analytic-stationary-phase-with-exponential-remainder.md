---
id: thm-ip-analytic-stationary-phase-with-exponential-remainder
kind: theorem
title: "Analytic stationary phase with optimal truncation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-holomorphic-morse-normalization-and-gaussian-contour
  - lem-ip-analytic-cutoff-sequence
  - def-real-analytic-germ-in-several-variables
  - def-multivariable-power-series
  - cor-cauchy-inequalities
  - thm-euclidean-inverse-function-theorem
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§2, Theorems 2.1 and 2.8, Lemma 2.7 and complete proofs, printed pp. 9–18."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5.4, stationary-phase proof of Theorem 5.2, and §5.5, oscillatory-integral representation of the FBI packet kernel and proof of Proposition 5.4."
proof_strategy: direct
---

## Statement

Let $n\ge1$, let $U\subset\mathbb R^n$ be a bounded open set, let $\Phi$ be holomorphic on a complex neighborhood of $\overline U$, and let $a\in C_c^\infty(U)$ have a holomorphic extension near $0$. Assume $0\in\operatorname{supp}a$, $\Phi(0)=\Phi_0$, $d\Phi(0)=0$, and $d\Phi(x)\ne0$ at every $x\in\operatorname{supp}a\setminus\{0\}$. Let $H=-i\Phi''(0)$ be complex symmetric with positive-definite real part. Assume there are $r,c_0,d_0>0$ such that
$$
\operatorname{Im}(\Phi(x)-\Phi_0)\ge c_0|x|^2 \quad(|x|\le r),\qquad \operatorname{Im}(\Phi(x)-\Phi_0)\ge d_0 \quad(x\in\operatorname{supp}a,\ |x|\ge r).
$$
Let $\chi_N$ be the finite-order cutoff sequence equal to one on a fixed neighborhood of $0$, with $0\le\chi_N\le1$, and supported where these phase hypotheses hold. For every integer $N\ge1$ and every $\lambda\ge1$, put $I_N(\lambda)=\int e^{i\lambda\Phi(x)}a(x)\chi_N(x)\,dx$. There are coefficients $c_j$ determined by the full Taylor series of the phase and amplitude at $0$ and constants $C,\delta>0$, independent of $N,\lambda$, such that
$$
I_N(\lambda)=e^{i\lambda\Phi_0}(2\pi/\lambda)^{n/2}(\det H)^{-1/2} \left(\sum_{j=0}^{N-1}c_j\lambda^{-j}\right)+E_N(\lambda),
$$
$$
|c_j|\le C^{j+1}j!,\qquad |e^{-i\lambda\Phi_0}E_N(\lambda)|\le C^{N+1}N!\lambda^{-N-n/2}+Ce^{-\delta\lambda}.
$$
The square-root branch is fixed by the preceding holomorphic Morse/Gaussian-contour lemma, and $c_0=a(0)$. Taking $N=\lfloor\epsilon\lambda\rfloor$ for sufficiently small fixed $\epsilon>0$ and sufficiently large $\lambda$ makes the normalized remainder $e^{-i\lambda\Phi_0}E_N(\lambda)=O(e^{-\delta_2\lambda})$ for some $\delta_2>0$. The expansion includes every coefficient through the stated truncation order; it is not only a leading-term estimate.

## Statement references

[[lem-ip-holomorphic-morse-normalization-and-gaussian-contour|Holomorphic Morse coordinates and determinant branch]]

[[lem-ip-analytic-cutoff-sequence|Finite-order cutoff sequence]]

[[def-real-analytic-germ-in-several-variables|Analytic phase and amplitude]]

[[def-multivariable-power-series|Power-series convention]]

[[cor-cauchy-inequalities|Cauchy coefficient bounds]]

## Facts & Assumptions

**Given:** The phase, amplitude, cutoff sequence, stationary point, and positivity hypotheses in the statement.

[F1] [[lem-ip-holomorphic-morse-normalization-and-gaussian-contour]]: the phase is holomorphically reduced to a nondegenerate quadratic form, the Gaussian determinant branch is fixed, and admissible contours may be deformed when boundary terms vanish.

[F2] [[lem-ip-analytic-cutoff-sequence]]: $\chi_N$ equals one near $0$, is supported in $U$, and has finite-order derivative bounds.

[F3] [[def-real-analytic-germ-in-several-variables]]: analytic phase and amplitude germs extend holomorphically near $0$.

[F4] [[def-multivariable-power-series]]: convergent Taylor series converge absolutely on smaller polydiscs.

[F5] [[cor-cauchy-inequalities]]: a holomorphic function bounded on a polydisc has Taylor coefficients bounded by its supremum times inverse powers of the polyradius.

[F6] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map with invertible real derivative has a local real $C^1$ inverse.

[F7] [[thm-stokes-theorem-for-smooth-singular-chains]]: the integral of a closed differential form over the boundary of a smooth chain is zero.

## Proof

**Given:** The data in the statement.

1.1 Choose $r>0$ so that $\chi_N=1$ on $B_{2r}(0)$ for every $N$, the phase and amplitude are holomorphic near $\overline B_{2r}(0)$, and the stated positivity holds. The positive-phase hypothesis and compactness of $\operatorname{supp}a\setminus B_r(0)$ give $\operatorname{Im}(\Phi-\Phi_0)\ge d>0$ there. Since $a$ is bounded and $\chi_N$ is bounded by one, the absolute value of that contribution after multiplication by $e^{-i\lambda\Phi_0}$ is at most $\|a\|_\infty |U|e^{-\lambda d}$, uniformly in $N$. Thus only the integral over the fixed local ball affects the power series; the complement contributes $O(e^{-d\lambda})$. [given, F2, choose]

2.1 Put $\phi=-i(\Phi-\Phi_0)$, so $\operatorname{Re}\phi=\operatorname{Im}(\Phi-\Phi_0)$ and $\phi''(0)=H$. Apply [F1] to obtain a holomorphic Morse coordinate $w=\Psi(x)$ with $\phi(x)=\tfrac12 w\cdot w$. The transformed real ball is a local contour $\Gamma$ through $0$. The transformed amplitude $ b(w)=a(\Psi^{-1}(w))\det D\Psi^{-1}(w) $ is holomorphic in a fixed polydisc and has coefficients bounded by $M R^{-|\alpha|}$ for some $M,R>0$ by [F3]–[F5]. [F1, F3, F4, F5, step 1.1]

3.1 Differentiating the Morse identity in [F1] twice at $0$ gives $A^TA=H$, where $A=D\Psi(0)$. Taylor's formula gives $\operatorname{Re}(\phi(tv))=\tfrac12t^2v^T(\operatorname{Re}H)v+o(t^2)$; comparing with $\operatorname{Re}\phi(tv)\ge ct^2|v|^2$ and dividing by $t^2/2$ as $t\to0$ yields $v^T(\operatorname{Re}H)v\ge2c|v|^2$. For a real vector $v$, write $Av=u+iw$ with $u,w\in\mathbb R^n$. Then $|u|^2-|w|^2=\operatorname{Re}(v^THv)>0$ when $v\ne0$. In particular, the real projection on $A\mathbb R^n$ is injective, hence bijective by dimension, and $A\mathbb R^n=\{u+iKu:u\in\mathbb R^n\}$ for a real linear map $K$. For nonzero $u$, applying the strict inequality to $v=A^{-1}(u+iKu)$ gives $|Ku|<|u|$; compactness of the unit sphere gives $\|K\|<1$. The real inverse theorem [F6] makes the nonlinear contour $\Gamma$ a graph $u+i(Ku+r(u))$, with $r(u)=O(|u|^2)$. For sufficiently small $r_0$, the homotopy graphs $u+i(Ku+t r(u))$ remain in the holomorphic chart and satisfy $\operatorname{Re}(w\cdot w)\ge c_0|u|^2$ for $|u|\le r_0$, because the linear margin $|u|^2-|Ku|^2\ge(1-\|K\|^2)|u|^2$ dominates the $O(|u|^3)$ error. The homotopy $u+i tKu$, $0\le t\le1$, also has $\operatorname{Re}(w\cdot w)=|u|^2-t^2|Ku|^2\ge(1-\|K\|^2)|u|^2$. On the fixed outer boundary these bounds, together with boundedness of the transformed amplitude and Jacobian, make the integrals $O(e^{-c_1\lambda})$. [F7] and the contour statement in [F1] therefore deform $\Gamma$ to the real Gaussian contour, with only that exponential boundary term. [F1, F6, F7, step 2.1, given]

3.2 Truncate the Taylor series after total degrees below $2N$. On a smaller ball $|w|\le r_0<R$, the Cauchy bound [F5] and a geometric-series estimate give $ \left|b(w)-\sum_{|\alpha|<2N}b_\alpha w^\alpha\right| \le C_2^{N+1}|w|^{2N}. $ Integrating this remainder against $e^{-\lambda|w|^2/2}$ and using $z=\sqrt{\lambda}\,w$ bounds it by $ C_3^{N+1}\lambda^{-N-n/2}\int_{\mathbb R^n}|z|^{2N}e^{-|z|^2/2}\,dz \le C_4^{N+1}N!\lambda^{-N-n/2}. $ For the last inequality, convexity gives $(\sum_{j=1}^n z_j^2)^N\le n^{N-1}\sum_{j=1}^n|z_j|^{2N}$. Fubini factors each summand into one-dimensional Gaussian moments; integration by parts gives $M_N=(2N-1)M_{N-1}$ with $M_0=\sqrt{2\pi}$, since the polynomial times Gaussian boundary term tends to zero. Hence $M_N=(2N-1)!!\sqrt{2\pi}\le2^NN!\sqrt{2\pi}$, and the displayed integral is at most $(2n)^N(2\pi)^{n/2}N!$. Absorb this fixed-dimensional factor into $C_4^{N+1}$. The extension of the Taylor polynomial $P_{<2N}(w)=\sum_{|\alpha|<2N}b_\alpha w^\alpha$ from $|w|\le r_0$ to the full real Gaussian integral needs a separate estimate uniform in $N$. For $|w|\ge r_0$ and $k<2N$, $|w|^k\le r_0^{k-2N}|w|^{2N}$. Cauchy's coefficient bound and the at most exponential count of degree-$k$ multi-indices give $D_N:=\sum_{k<2N}\sum_{|\alpha|=k}|b_\alpha|r_0^{k-2N}\le C_5^{N+1}$, since $r_0,R$ are fixed positive constants and the sum has $2N$ terms after grouping degrees. Consequently $\int_{|w|\ge r_0}|P_{<2N}(w)|e^{-\lambda|w|^2/2}\,dw\le C_5^{N+1}\lambda^{-N-n/2}\int_{\mathbb R^n}|z|^{2N}e^{-|z|^2/2}\,dz\le C_6^{N+1}N!\lambda^{-N-n/2}$. Thus the polynomial extension tail is controlled by the factorial remainder for every $N$, rather than by an exponential constant independent of $N$. The actual amplitude away from the local critical region and the contour boundary still have the exponential estimates from step 1.1 and [F1]; no extension of that amplitude outside its holomorphy neighborhood is used. Combining these estimates proves the stated normalized error for every $N$. [F1, F5, step 1.1, step 2.1, algebra]

4.1 Expand $b(w)=\sum_{\alpha}b_\alpha w^\alpha$ and group by total degree. Odd monomials integrate to zero over $\mathbb R^n$ because the Gaussian and domain are invariant under $w\mapsto-w$. Each monomial of degree $2j$ contributes a constant times $\lambda^{-n/2-j}$ by the change of variables $z=\sqrt{\lambda}\,w$. In one dimension, integration by parts gives $I_k=\int t^{2k}e^{-t^2/2}dt=(2k-1)I_{k-1}$ and $I_0=\sqrt{2\pi}$, hence $I_k=(2k-1)!!\sqrt{2\pi}$. Products give the $n$-dimensional moments. If $\alpha=2k$ and $|k|=j$, then $\prod_l(2k_l-1)!!\le(2j-1)!!\le2^j j!$; all monomials with an odd coordinate vanish. After scaling, every degree-$2j$ moment is therefore at most $C_0^{j+1}j!\lambda^{-j}$. The number of degree-$2j$ multi-indices is at most $C_n^{j+1}$ and $|b_\alpha|\le M R^{-2j}$, so the coefficient of $\lambda^{-j}$ is bounded by $C_1^{j+1}j!$. The Jacobian at zero contributes $(\det H)^{-1/2}$ on the chosen branch, and the degree-zero coefficient is $a(0)$. [F1, F3, F5, step 2.1, step 3.1, algebra]

5.1 For $N=\lfloor\epsilon\lambda\rfloor$ and sufficiently large $\lambda$ so that $N\ge\epsilon\lambda/2\ge1$, the factorial term is at most $ C^{N+1}\lambda^{-n/2}(N/\lambda)^N $ because $N!\le N^N$. Choose $\epsilon>0$ with $C\epsilon<1/2$. Since $N\le\epsilon\lambda$, the displayed term is at most $C^{N+1}\lambda^{-n/2}\epsilon^N$, which is bounded by $C'e^{-\delta_2\lambda}$ because $N\ge\epsilon\lambda/2$ and $2^{-N}\le e^{-(\epsilon\log2)\lambda/2}$. Combining this with the exponential term in step 3.2 proves optimal truncation of the normalized remainder at order proportional to $\lambda$, with all stationary-phase coefficients retained. For the absolute remainder multiply this bound by $|e^{i\lambda\Phi_0}|=e^{-\lambda\operatorname{Im}\Phi_0}$; no sign restriction on $\operatorname{Im}\Phi_0$ is imposed. [step 3.2, algebra] ∎
