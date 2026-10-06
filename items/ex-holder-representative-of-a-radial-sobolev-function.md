---
id: ex-holder-representative-of-a-radial-sobolev-function
kind: example
title: "Radial powers approach the Morrey borderline exponent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-axiom-of-choice, thm-morrey-inequality-for-p-greater-than-n, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, thm-real-power-continuity-and-derivatives, cor-newton-leibniz-with-finitely-many-exceptional-points, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, thm-tonelli-and-fubini-for-completed-product-measures, cor-vector-valued-ftc-and-lipschitz-bound, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.3, Theorem 3.23 and Remarks 3.25, printed pp. 75–77; the exact radial energy and seminorm are computed locally here."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.21 and proof, printed pp. 69–71, for Morrey; the radial computation is derived here."
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, $n<p<\infty$, $\alpha_0=1-\frac np\in(0,1)$, and for $0<\delta<\frac np$ define $u_\delta(x)=|x|^{\alpha_0+\delta}$ on $B=B(0,1)$, with $u_\delta(0)=0$. Then $u_\delta\in W^{1,p}(B)$ and
$$\|Du_\delta\|_{L^p(B)}=(\alpha_0+\delta)\Bigl(\frac{\sigma(S^{n-1})}{p\delta}\Bigr)^{1/p}.$$
The function $u_\delta$ is Holder of exponent $\alpha_0+\delta$ on $B$ with $[u_\delta]_{C^{0,\alpha_0+\delta}}=1$, and the local Morrey estimate holds on each $B(0,r)$ with $2r<1$; as $\delta\downarrow0$ the energy $\|Du_\delta\|_{L^p(B)}^p$ diverges like $\alpha_0^p\sigma(S^{n-1})/(p\delta)$, and the borderline function $|x|^{\alpha_0}$ is not in $W^{1,p}(B)$. The exponent $\alpha_0=1-\frac np$ is exactly the borderline produced by $p>n$.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; $n<p<\infty$; $\alpha_0=1-n/p\in(0,1)$; $0<\delta<n/p$; and $u_\delta(x)=|x|^{\alpha_0+\delta}$ on $B=B(0,1)$, $u_\delta(0)=0$.

[F1] Polar coordinates: for nonnegative Borel $h$, $\int_Bh=\int_0^1\int_{S^{n-1}}h(r\omega)r^{n-1}d\sigma(\omega)dr$ with $0<\sigma(S^{n-1})<\infty$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] For real $\beta$ the function $r\mapsto r^\beta$ is differentiable on $(0,\infty)$ with derivative $\beta r^{\beta-1}$, so for $\beta>-1$ its antiderivative is $r^{\beta+1}/(\beta+1)$; Newton-Leibniz on $[\varepsilon,1]$ combined with monotone convergence as $\varepsilon\downarrow0$ gives $\int_0^1r^\beta dr=1/(\beta+1)$ ([[thm-real-power-continuity-and-derivatives]], [[cor-newton-leibniz-with-finitely-many-exceptional-points]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-monotone-convergence-for-the-integral]]).

[F3] The radial derivative off the origin is $D u_\delta(x)=(\alpha_0+\delta)|x|^{\alpha_0+\delta-2}x$, of modulus $(\alpha_0+\delta)|x|^{\alpha_0+\delta-1}$; $W^{1,p}$ consists of $L^p$ classes with weak gradient in $L^p$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] For $0<\alpha<1$ and $h\ge0$, the function $t\mapsto(t+h)^\alpha-t^\alpha$ decreases for $t>0$, since its derivative is $\alpha((t+h)^{\alpha-1}-t^{\alpha-1})\le0$. Continuity at $t=0$ gives $(t+h)^\alpha-t^\alpha\le h^\alpha$, hence $|s^\alpha-t^\alpha|\le|s-t|^\alpha$ for $s,t\ge0$; the case $\alpha=1$ is equality ([[thm-real-power-continuity-and-derivatives]]). The Holder seminorm is the supremum of the difference quotients ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F5] Morrey gives $[v]_{C^{0,\alpha_0}(B(0,r))}\le C(n,p)\|Dv\|_{L^p(B(0,2r))}$ for $2r<1$ ([[thm-morrey-inequality-for-p-greater-than-n]]).

[F6] Countable Choice is assumed; the vector-valued fundamental theorem ([[cor-vector-valued-ftc-and-lipschitz-bound]]) gives integration by parts for smooth products on intervals, and Fubini ([[thm-tonelli-and-fubini-for-completed-product-measures]]) integrates the section identities. Classical smooth derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 The weak gradient and the energy. Off the origin $u_\delta$ is smooth with radial derivative $Du_\delta(x)=(\alpha_0+\delta)|x|^{\alpha_0+\delta-2}x$ of modulus $(\alpha_0+\delta)|x|^{\alpha_0+\delta-1}$. For $\alpha:=\alpha_0+\delta>0$, this gradient is in $L^1(B)$ because its radial exponent is $n+\alpha-2>-1$, and $u_\delta$ is bounded. Every coordinate line with nonzero transverse coordinate avoids the origin; apply the fundamental theorem to $u_\delta\varphi$ on its interval in $B$, with $\varphi$ a compactly supported test. Since $n\ge2$, the omitted transverse singleton is null, and Fubini [F6] gives the global weak derivative identity.  With $r=|x|$ and $\beta=p(\alpha_0+\delta-1)+n-1$, polar coordinates [F1] and the power integral [F2] give $\|Du_\delta\|_{L^p(B)}^p=\sigma(S^{n-1})(\alpha_0+\delta)^p\int_0^1r^\beta dr=\sigma(S^{n-1})(\alpha_0+\delta)^p/(\beta+1)$, and $\beta+1=p(\alpha_0+\delta)-p+n=p\delta$ because $p\alpha_0=p-n$. Hence $\|Du_\delta\|_{L^p(B)}=(\alpha_0+\delta)(\sigma(S^{n-1})/(p\delta))^{1/p}$, and $u_\delta\in W^{1,p}(B)$ by [F3] since both $u_\delta$ and this gradient are in $L^p(B)$. [F1, F2, F3, F6, given, algebra]

1.2 The Holder exponent. For $x\ne y$ in $B$, writing $s=|x|$, $t=|y|$ and using the elementary inequality of [F4] with $\alpha=\alpha_0+\delta\in(0,1)$, $|u_\delta(x)-u_\delta(y)|=|s^\alpha-t^\alpha|\le|s-t|^\alpha\le|x-y|^\alpha$, so $[u_\delta]_{C^{0,\alpha_0+\delta}}\le1$; the value $1$ is attained by the pair $x=0$, $y$ with $|y|=t\in(0,1)$, where the ratio is $t^{\alpha}/t^{\alpha}=1$. Hence $[u_\delta]_{C^{0,\alpha_0+\delta}}=1$. [F4, given, algebra]

2.1 The borderline. Morrey [F5] applies on every $B(0,r)$ with $2r<1$. The explicit function is also globally $\alpha_0$-Holder on $B$: step 1.2 gives $[u_\delta]_{C^{0,\alpha_0}}\le2^\delta$. Step 1.1 gives $\|Du_\delta\|_p^p=\sigma(S^{n-1})(\alpha_0+\delta)^p/(p\delta)\sim\sigma(S^{n-1})\alpha_0^p/(p\delta)$ as $\delta\downarrow0$. For $\delta=0$ the same computation gives $\beta+1=0$, so $\int_B|D(|x|^{\alpha_0})|^p=\sigma(S^{n-1})\alpha_0^p\int_0^1r^{-1}dr=+\infty$ and $|x|^{\alpha_0}\notin W^{1,p}(B)$; the failure is exactly the divergence of the energy at the origin. [F2, F5, step 1.1, step 1.2, given, algebra] ∎

## Source notes

For the positive powers $\beta>0$ used here, the borderline computation is $|x|^\beta\in W^{1,p}(B)$ exactly when $p(\beta-1)+n>0$, that is $\beta>1-n/p=\alpha_0$, with the derivative energy equal to $\sigma(S^{n-1})(\alpha_0+\delta)^p/(p\delta)$ at $\beta=\alpha_0+\delta$. Kinnunen's discussion around Theorem 3.23 and Remarks 3.25 and Laugesen's Theorem 3.21 with its moral give the Morrey estimate used for context; the displayed radial energy is computed directly above. The denominator $p\delta$ is the exact value of $p(\beta-1)+n$ at $\beta=\alpha_0+\delta$; the energy diverges like $1/\delta$ as $\delta\downarrow0$, so the $L^p$ norm diverges like $\delta^{-1/p}$.
