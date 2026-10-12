---
id: thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility
aliases: [nrqm-controlled-dynamics-outgoing-fredholm-invertibility]
kind: theorem
domain: mathematics
title: "Outgoing Fredholm invertibility"
status: draft
origin: pipeline
deps: [thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp, lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, thm-interior-h-two-regularity-for-divergence-form-equations, thm-plancherel, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-sobolev-space-wkp-and-its-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
  thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp: mathematical-premise
  lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact: mathematical-premise
  thm-interior-h-two-regularity-for-divergence-form-equations: mathematical-premise
  thm-plancherel: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, compact operators and stationary scattering"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $R>0$, let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ with $\operatorname{supp}V\subseteq B_R$,
and put $\mathcal H=L^2(B_R;\mathbb C)$. For $k>0$ define

$$K_kf(x)=\int_{B_R}\frac{e^{ik|x-y|}V(y)f(y)}{4\pi|x-y|}\,dy.$$

Then $K_k$ is compact and $I+K_k$ is boundedly invertible. In particular
$\|(I+K_k)f\|_2\ge\|(I+K_k)^{-1}\|^{-1}\|f\|_2$.
Moreover, on every interval $[a,b]\subset(0,\infty)$ the inverses are
operator-norm continuous and uniformly bounded. Writing $K_\zeta$ for the
same kernel with complex wave number $\zeta$, there is $\delta>0$ such that
$I+K_\zeta$ is invertible whenever $\operatorname{dist}(\zeta,[a,b])<\delta$;
its inverses are uniformly bounded there and converge in operator norm to
the outgoing real-axis inverses as $\zeta\to k\in[a,b]$. For incoming
kernels replace $e^{ik|x-y|}$ by $e^{-ik|x-y|}$; the same conclusions hold.
No zero-energy or high-energy uniform bound is claimed.

## Facts & Assumptions

**Given:** the real bounded compact potential $V$, $R>0$, $k>0$, and
$\mathcal H=L^2(B_R;\mathbb C)$; all integrals use Lebesgue measure.

[F1] The concrete CC kernel lemma [[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]] bounds operator norm by product-$L^2$ kernel norm and proves compactness by finite rectangular-product kernels. Apply it after zero extension from $B_R\times B_R$ to $\mathbb R^6$, followed by restriction to $B_R$. This uses its actual finite-rank approximation, not a general Hilbert-Schmidt theorem or a choice of an arbitrary Hilbert basis.

[F2] Interior regularity [[thm-interior-h-two-regularity-for-divergence-form-equations]]: a weak $H^1_{\mathrm{loc}}$ solution of $-\Delta u=g\in L^2_{\mathrm{loc}}$ belongs to $H^2_{\mathrm{loc}}$. Fourier Plancherel [[thm-plancherel]] gives the global implication $u,\Delta u\in L^2\Rightarrow u\in H^2$, since $(1+|p|^2)^2\le2(1+|p|^4)$.

[F3] Required repaired positive-eigenvalue supplier: for every real bounded compactly supported $V$, every $k>0$, and every $u\in H^2(\mathbb R^3)$ satisfying $(-\Delta+V-k^2)u=0$, one has $u=0$ ([[thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues]]). Its exact UCP prerequisite is: on connected open $\Omega$, an $H^2_{\mathrm{loc}}$ solution of $\Delta u=Bu$, with complex $B\in L^\infty_{\mathrm{loc}}(\Omega)$, vanishing on a nonempty open subset vanishes throughout $\Omega$ ([[thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp]]). Those suppliers are under the lead reviewer's separate repair; this draft does not certify their present production proofs.

## Proof

1.1 Concrete kernel approximation: put $h_k(x,y)=e^{ik|x-y|}V(y)/(4\pi|x-y|)$ on $B_R\times B_R$, zero elsewhere. Its squared norm is at most $\|V\|_\infty^2|B_R|(16\pi^2)^{-1}\int_{|z|<2R}|z|^{-2}dz<\infty$. Thus [F1] gives boundedness, compactness and finite-rank approximation on $\mathcal H$. More explicitly, enumerate the rational complex box-step functions restricted to $B_R$, and apply Gram-Schmidt in that order, discarding zero remainders; this uniquely specifies an orthonormal basis $(e_j)$ because the original enumeration is dense. The product basis $e_i(x)\overline{e_j(y)}$ is complete in product $L^2$: rectangular simple functions are dense by the same kernel lemma's box approximation, and approximation of each factor approximates each finite product. Its finite square partial sums $h_{k,n}=\sum_{i,j\le n}a_{ij}e_i(x)\overline{e_j(y)}$, with $a_{ij}=\int h_k(x,y)\overline{e_i(x)}e_j(y)dxdy$, converge in kernel norm. The associated $F_n$ has range in $\operatorname{span}\{e_1,\ldots,e_n\}$ and $\|K_k-F_n\|\le\|h_k-h_{k,n}\|_2\to0$. Select the least $n$ making this bound smaller than $1/2$. No maximal-family or arbitrary-basis selection occurs. [F1, given, construct, algebra]

1.2 Local Green regularity: for $g=Vf$ zero-extended from $B_R$, one has $g\in L^2\cap L^1$ with compact support. Set $u=-G_k*g$, $G_k(z)=e^{ik|z|}/(4\pi|z|)$. On any fixed bounded $x$-region the convolution and its first weak derivatives use bounded-radius restrictions of $G_k$ and $\nabla G_k$; both are in $L^1$, because their singularities are $|z|^{-1}$ and $|z|^{-2}$. The bound $\|q*g\|_2\le\|q\|_1\|g\|_2$ follows by weighted Cauchy-Schwarz $|\int q(z)g(x-z)dz|^2\le\|q\|_1\int|q(z)||g(x-z)|^2dz$ and integration in $x$. Hence $u\in H^1_{\mathrm{loc}}$. Direct radial differentiation away from zero gives $(-\Delta-k^2)G_k=0$ there, while integration over a shrinking sphere gives the unit delta coefficient from $-\partial_r(1/(4\pi r))$; the locally integrable remainder tends to zero. Thus $(-\Delta-k^2)G_k=\delta_0$ distributionally and $(-\Delta-k^2)u=-g$. The right side and $u$ are locally square integrable, so [F2] gives $u\in H^2_{\mathrm{loc}}$. This argument requires the actual $L^2$ source, and makes no assertion for arbitrary compact $L^1$ sources. [F2, given, construct, algebra]

2.1 Kernel-to-eigenfunction and flux: suppose $(I+K_k)f=0$ and use $u$ from step 1.2. On $B_R$ one has $u=-K_kf=f$, hence $g=Vu$ and $(-\Delta+V-k^2)u=0$ globally. For $r>2R$, Taylor expansion uniformly for $y\in B_R$ gives $G_k(r\omega-y)=e^{ikr}e^{-ik\omega\cdot y}/(4\pi r)+O(r^{-2})$ and $\partial_rG_k(r\omega-y)=ik e^{ikr}e^{-ik\omega\cdot y}/(4\pi r)+O(r^{-2})$. Integrating against $g\in L^1$ yields $u(r\omega)=e^{ikr}A(\omega)/r+O(r^{-2})$ and $\partial_ru(r\omega)=ik e^{ikr}A(\omega)/r+O(r^{-2})$, where $A(\omega)=-(4\pi)^{-1}\int e^{-ik\omega\cdot y}g(y)dy$ is smooth because all $y$-moments are integrable. The weak Green identity, justified by $H^2_{\mathrm{loc}}$ and radial cutoffs (the solution is smooth outside $B_R$), gives $\operatorname{Im}\int_{|x|=r}\overline u\,\partial_ru\,dS=0$: its interior integral is $\int_{B_r}(|\nabla u|^2+(V-k^2)|u|^2)$, which is real. Substituting the expansions gives $0=k\int_{S^2}|A|^2d\sigma+O(r^{-1})$, so $A=0$. Consequently $u=O(r^{-2})$ at infinity and $u\in L^2(\mathbb R^3)$. Its equation gives $\Delta u=(V-k^2)u\in L^2$, so the global Fourier criterion [F2] gives $u\in H^2$. The exact repaired positive-eigenvalue conclusion [F3] then yields $u=0$ and $f=0$. Thus $I+K_k$ is injective, conditional on that supplier's repair. [F2, F3, step 1.2, algebra]

3.1 Explicit finite-rank inversion: take $F=F_n$ from step 1.1 and write $E=K_k-F$, $L=I+E$. Since $\|E\|<1/2$, the series $L^{-1}=\sum_{m\ge0}(-E)^m$ converges in operator norm, is a two-sided inverse, and has norm at most $2$. Put $T=L^{-1}F$ and $B=I+T$, so $I+K_k=LB$. The subspace $Y=\operatorname{ran}T$ is finite dimensional. Obtain an orthonormal basis of $Y$ by Gram-Schmidt on the finite list $L^{-1}e_1,\ldots,L^{-1}e_n$ after applying the finite coefficient matrix of $F$, discarding zero vectors; thus the orthogonal projection $P_Y$ is a finite sum of coordinate pairings. Because $T(\mathcal H)\subseteq Y$, $B(Y)\subseteq Y$; injectivity of $I+K_k$ from step 2.1 makes $B|_Y$ injective and therefore bijective by finite-dimensional linear algebra. Given $h\in\mathcal H$, put $z=(I-P_Y)h$ and $y=(B|_Y)^{-1}(P_Yh-Tz)$. Then $B(z+y)=z+Tz+B y=h$. These finite matrix and projection operations are bounded; explicitly $\|z+y\|\le[1+\|(B|_Y)^{-1}\|(1+\|T\|)]\|h\|$. Hence $B^{-1}$ and $(I+K_k)^{-1}=B^{-1}L^{-1}$ are bounded. If $Y=\{0\}$ the same formula means $B=I$. This proves full surjectivity and the lower bound without a Banach Fredholm alternative, kernel/range-chain selection or DC. [step 1.1, step 2.1, construct, algebra]

4.1 Uniform positive-energy boundary: for $\zeta,\eta$ in a bounded complex neighborhood of $[a,b]$, with $|\operatorname{Im}\zeta|,|\operatorname{Im}\eta|\le1$, the integral mean-value identity gives $|e^{i\zeta d}-e^{i\eta d}|\le d e^{2R}|\zeta-\eta|$ for $0\le d\le2R$. Thus $\|K_\zeta-K_\eta\|\le\|h_\zeta-h_\eta\|_2\le C_R\|V\|_\infty|\zeta-\eta|$. At each real $k>0$, step 3.1 gives $A_k=(I+K_k)^{-1}$; whenever $\|A_k(K_\zeta-K_k)\|<1/2$, the factorization $I+K_\zeta=(I+K_k)[I+A_k(K_\zeta-K_k)]$ and its Neumann inverse give $\|(I+K_\zeta)^{-1}\|\le2\|A_k\|$ and continuity at $k$. In particular $k\mapsto A_k$ is continuous on $[a,b]$, so $M=\max_{k\in[a,b]}\|A_k\|<\infty$. Choose $\delta<1$ with $C_R\|V\|_\infty M\delta<1/2$ (if $V=0$, any $\delta<1$ works). For any $\zeta$ at distance less than $\delta$ from the interval, choose its nearest real point $k\in[a,b]$ by the explicit clipping formula; the same factorization gives invertibility, bound $2M$, and convergence to $A_k$ in operator norm. Energy $z=\zeta^2$ with the outgoing square-root branch near $[a^2,b^2]$ therefore has the same compact-positive-energy boundary behavior. Complex conjugation $Cf=\overline f$ satisfies $CK_kC=K_{-k}$ because $V$ is real, so incoming real-axis inverses and their boundary limits have the same bounds. All original claims and the stated compact-positive-energy uniformity follow. [F1, step 3.1, algebra] ∎

## Remarks

Research-only authoring draft. The current production UCP proof and positive-eigenvalue proof are being repaired by the lead; [F3] records the exact necessary conclusion rather than accepting their defective current proofs. Once that repair is available, the local finite-rank and Neumann argument above supplies the full original generic-potential/all-positive-k result under CC, together with the positive-compact-energy uniform boundary input. The lead reviewer owns the production dependency list, levels, source fidelity, contracts and complete consumer cone. No production readiness or independent acceptance follows from this draft's mechanical checks.
