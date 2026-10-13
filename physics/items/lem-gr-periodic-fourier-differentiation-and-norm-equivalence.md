---
id: lem-gr-periodic-fourier-differentiation-and-norm-equivalence
kind: lemma
title: "Periodic Fourier differentiation identity and equivalence of the derivative and Fourier-weight Sobolev norms"
status: published
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, thm-fourier-basis-and-parseval-on-the-n-torus, thm-multinomial-theorem, thm-ftc-second-part, thm-continuous-implies-integrable, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-multinomial-theorem: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity and convergence of the coefficient series"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into L-infinity and the Banach-algebra property for s>3/2) and Section 4.3 (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge0$ be an integer, and let
$\mathbb T^3_{2\pi}$, $\mu$, $\chi_k$,
$\widehat u(k)$, the weak derivatives $D^\alpha$ and the spaces
$H^s(\mathbb T^3_{2\pi};\mathbb R^N)$ be as in
[[def-gr-periodic-torus-and-sobolev-spaces]], and put
$$N_s(u)^2:=\sum_{k\in\mathbb Z^3}(1+|k|^2)^s\,|\widehat u(k)|^2,\qquad |k|^2:=k_1^2+k_2^2+k_3^2 .$$

**(a)** Let $u\in H^s$ and let $\alpha\in\mathbb N_0^3$ with $|\alpha|\le s$. Then
$D^\alpha u\in H^{s-|\alpha|}$ and
$$\widehat{D^\alpha u}(k)=(ik)^\alpha\,\widehat u(k)\qquad(k\in\mathbb Z^3),\qquad (ik)^\alpha:=\prod_{j=1}^3(ik_j)^{\alpha_j}.$$

**(b)** Let $u\in L^2(\mathbb T^3_{2\pi};\mathbb R^N)$ satisfy $N_s(u)<\infty$.
Then $u\in H^s(\mathbb T^3_{2\pi};\mathbb R^N)$, and there are constants
$0<c_s\le C_s<\infty$, depending only on $s$, such that
$$c_s\,N_s(u)^2\le\|u\|_{H^s}^2\le C_s\,N_s(u)^2 .$$
The right-hand inequality holds for every $u\in H^s$, so the two norms are
equivalent on $H^s$.

## Facts & Assumptions
**Given:** Countable Choice, an integer $s\ge0$, the torus $\mathbb T^3_{2\pi}$ with its normalized measure $\mu$ and characters $\chi_k$, the weak derivatives $D^\alpha$, and the spaces $H^s$.

[L1] $(\chi_k)_{k\in\mathbb Z^3}$ is an orthonormal basis of the complex $L^2$: for $f,g\in L^2$ one has the norm and pairing identities $\|f\|_2^2=\sum_k|\widehat f(k)|^2$ and $\langle f,g\rangle=\sum_k\widehat f(k)\overline{\widehat g(k)}$, the series converging absolutely, and the coefficient map is a surjective linear isometry onto $\ell^2(\mathbb Z^3)$ ([[thm-fourier-basis-and-parseval-on-the-n-torus]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] $v=D^\alpha u$ means $\int u\,D^\alpha\varphi\,d\mu=(-1)^{|\alpha|}\int v\,\varphi\,d\mu$ for every smooth test function $\varphi$; the real and imaginary parts of $\chi_l$ are smooth real tests; adding their test identities extends the identity complex-linearly to $\chi_l$ ([[def-gr-periodic-torus-and-sobolev-spaces]]).

[L3] For a $C^1$ function $G$ on an interval $[a,b]$, $\int_a^bG'=G(b)-G(a)$: the derivative $G'$ is continuous, hence integrable, and the second fundamental theorem of calculus applies ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]]).

[L4] Multinomial expansion: for any finite real tuple $(x_1,\ldots,x_d)$ and $s\in\mathbb N_0$, $(x_1+\cdots+x_d)^s=\sum_{|\gamma|=s}(s!/\gamma!)x^\gamma$, over the finite set of $d$-component multi-indices. The coefficients are nonnegative integers and sum to $d^s$, by taking all $x_i=1$ ([[thm-multinomial-theorem]], [[def-ck-and-multi-index-notation-in-several-variables]]).




## Proof

**Proof technique:** direct.

1.1 (One-variable periodic integration by parts.) For smooth $2\pi$-periodic $G,H$ and each $j$, $\int_{\mathbb T_{2\pi}}G\,\partial_jH\,d\mu_{\mathbb T}=-\int_{\mathbb T_{2\pi}}(\partial_jG)\,H\,d\mu_{\mathbb T}$: indeed $\int_0^{2\pi}\partial_j(GH)\,dx_j=(GH)|_0^{2\pi}=0$ by the second fundamental theorem of calculus and periodicity [L3], and the product rule gives the claim; the remaining coordinates integrate out by the product-measure convention. Consequently, for every smooth $\varphi$, every $k$ and every $\alpha$, $\int \chi_kD^\alpha\varphi\,d\mu=(-1)^{|\alpha|}(ik)^\alpha\int\chi_k\varphi\,d\mu$: induct on $|\alpha|$, moving one variable derivative from $\varphi$ onto $\chi_k$ by the one-variable identity and using $\partial_j\chi_k=ik_j\chi_k$. In particular $D^\alpha\chi_k=(ik)^\alpha\chi_k$ in the weak sense of [L2], the case $\varphi=\chi_{-l}$ tested against $\chi_k$ having Fourier coefficients $\widehat{\chi_k}(l)=\delta_{kl}$. [L2, L3, algebra]

1.2 (The symbol bounds.) For $k\in\mathbb Z^3$ put $q_k:=\sum_{|\alpha|\le s}|k^\alpha|^2$. Each term is at most $(1+|k|^2)^s$, and there are at most $(s+1)^3$ terms, so $q_k\le(s+1)^3(1+|k|^2)^s$. Conversely, the multinomial expansion of $(1+k_1^2+k_2^2+k_3^2)^s$ is $\sum_{|\alpha|\le s}c_\alpha |k^\alpha|^2$, where $c_\alpha=s!/((s-|\alpha|)!\alpha!)$. These nonnegative integer coefficients sum to $4^s$ by setting all four variables to $1$, so every $c_\alpha\le4^s$. It follows that $(1+|k|^2)^s\le4^s q_k$. This includes $s=0$, where both sides are $1$. Hence $4^{-s}(1+|k|^2)^s\le q_k\le(s+1)^3(1+|k|^2)^s$. [L4, algebra]

2.1 (The differentiation identity (a).) If $u\in H^s$ and $|\alpha|\le s$, then $D^\alpha u\in H^{s-|\alpha|}$: a weak derivative of $D^\alpha u$ of order $|\beta|\le s-|\alpha|$ is the weak derivative $D^{\alpha+\beta}u$, because the defining test identity for the iterated derivative follows by applying the two defining identities in succession and noting that $D^\beta\varphi$ is again a smooth test function. Testing the defining identity for $D^\alpha u$ against $\varphi=\chi_{-k}$ gives $\widehat{D^\alpha u}(k)=(-1)^{|\alpha|}\int u\,D^\alpha\chi_{-k}\,d\mu=(-1)^{|\alpha|}(-ik)^\alpha\int u\,\chi_{-k}\,d\mu=(ik)^\alpha\widehat u(k)$, where the middle equality uses step 1.1 for the smooth test function $D^\alpha\chi_{-k}=(-ik)^\alpha\chi_{-k}$ and the last uses $(-1)^{|\alpha|}(-i)^\alpha=i^\alpha$. [step 1.1, L2, algebra]

2.2 (The norm bounds for $u\in H^s$.) By Parseval [L1] applied to the $L^2$ classes $D^\alpha u$, $\|D^\alpha u\|_2^2=\sum_k|k^\alpha|^2|\widehat u(k)|^2$, so the definition of the $H^s$ norm gives $\|u\|_{H^s}^2=\sum_kq_k|\widehat u(k)|^2$. Combining with step 1.2, $\|u\|_{H^s}^2\le(s+1)^3N_s(u)^2$ and $N_s(u)^2\le4^s\|u\|_{H^s}^2$, which are the right-hand inequality and the converse inequality of (b) whenever $u\in H^s$. [step 1.2, L1, algebra]

3.1 (Converse direction of (b): the weighted series produce weak derivatives.) Let $u\in L^2$ with $N_s(u)<\infty$. For each $|\alpha|\le s$ the sequence $k\mapsto(ik)^\alpha\widehat u(k)$ is square-summable because $|k^\alpha|^2\le(1+|k|^2)^{|\alpha|}\le(1+|k|^2)^s$; by the surjectivity of the coefficient isometry [L1] there is a unique class $w_\alpha\in L^2$ with $\widehat{w_\alpha}(k)=(ik)^\alpha\widehat u(k)$. Since $u$ is real, $\widehat u(-k)=\overline{\widehat u(k)}$ by conjugating its integral. Thus $a_k:=(ik)^\alpha\widehat u(k)$ satisfies $a_{-k}=\overline{a_k}$. Also $\widehat{\overline{w_\alpha}}(k)=\overline{\widehat{w_\alpha}(-k)}=a_k$, again by conjugating the integral. Injectivity in [L1] gives $\overline{w_\alpha}=w_\alpha$ as $L^2$ classes, so $w_\alpha$ has a real-valued representative, componentwise. For a smooth real test $\varphi$, Parseval's pairing identity [L1] gives $\int u\,D^\alpha\varphi\,d\mu=\sum_k\widehat u(k)\overline{\widehat{D^\alpha\varphi}(k)}=\sum_k\widehat u(k)\overline{(ik)^\alpha\widehat\varphi(k)}=\sum_k(-1)^{|\alpha|}(ik)^\alpha\widehat u(k)\overline{\widehat\varphi(k)}=(-1)^{|\alpha|}\int w_\alpha\varphi\,d\mu$, where the second equality is step 2.1 applied to the smooth $\varphi$ and the third uses $\overline{(ik)^\alpha}=(-i)^\alpha k^\alpha=(-1)^{|\alpha|}(ik)^\alpha$. Hence $D^\alpha u=w_\alpha$ weakly for every $|\alpha|\le s$, so $u\in H^s$. [step 2.1, L1, L2, algebra]

4.1 (Conclusion.) By step 3.1 and step 2.2, for $u$ with $N_s(u)<\infty$ the class lies in $H^s$ and satisfies $4^{-s}N_s(u)^2\le\|u\|_{H^s}^2\le(s+1)^3N_s(u)^2$, so (b) holds with $c_s=4^{-s}$ and $C_s=(s+1)^3$, while (a) was proved in step 2.1. [step 3.1, step 2.1, step 2.2, construct, discharge-construct] ∎



## Remarks

- **Use.** Part (a) is the differentiation rule and (b) the equivalence of norms used freely on this page: [[lem-gr-periodic-sobolev-embedding]] uses (b) to reduce $L^\infty$ bounds to weighted coefficient sums, and [[def-gr-galerkin-fourier-projection]] uses (a) to commute the projection with derivatives.
- **Constants.** No sharpness of $c_s,C_s$ is claimed; only their existence and their dependence on $s$ alone.
