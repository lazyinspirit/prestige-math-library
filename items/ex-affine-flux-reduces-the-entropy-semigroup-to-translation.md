---
id: ex-affine-flux-reduces-the-entropy-semigroup-to-translation
kind: example
title: Affine flux reduces the entropy semigroup to translation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, thm-entropy-solution-semigroup-on-lone, def-kruzhkov-entropy-solution, def-distributional-weak-solution-of-a-scalar-conservation-law, def-convex-entropy-entropy-flux-pair, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-chain-rule, thm-integrals-are-invariant-under-measure-preserving-maps, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-measure-preserving-transformation-and-system, def-translation-of-a-function-on-rn, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, def-countable-choice, def-dependent-choice]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§5, remarks on linear equations and the degenerate case, pp. 239–241"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§3.1, linear-flux Riemann solution, pp. 21–22"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume countable choice and dependent choice ([[def-countable-choice]],
[[def-dependent-choice]]), as used by the translation-continuity and
entropy-semigroup results below. Let $f(u)=cu+d$, with $c,d\in\mathbb R$, and
let $u_0\in L^1(\mathbb R)\cap L^\infty(\mathbb R)$. The entropy solution is
$$u(t,x)=u_0(x-ct).$$
For every convex entropy pair $(\eta,q)$, $q'(u)=c\eta'(u)$, hence
$q(u)=c\eta(u)+C$; the transport change of variables gives
$$\partial_t\eta(u)+\partial_xq(u)=0$$ in distributions, so entropy production
is zero. Any jump already present in $u_0$ translates at speed $c$ with the
same left and right states and zero production $[q]-c[\eta]=0$; the affine
evolution creates no new shocks. In particular the semigroup of
[[thm-entropy-solution-semigroup-on-lone]] is $S_tu_0=u_0(\cdot-ct)$
([[def-scalar-conservation-law-and-flux]], [[def-kruzhkov-entropy-solution]],
[[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

## Facts & Assumptions

**Given:** an affine flux $f(u)=cu+d$, a datum $u_0\in L^1(\mathbb R)\cap L^\infty(\mathbb R)$, the translated profile $u(t,x)=u_0(x-ct)$, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] Translation invariance: the maps $y\mapsto y+ct$ preserve Lebesgue measure; integrals of integrable functions are invariant under measure-preserving transformations, so $\int_{\mathbb R}v(x-ct)\,dx=\int_{\mathbb R}v(y)\,dy$, and with Fubini the substitution $y=x-ct$ is legitimate in the space--time integrals below ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-translation-of-a-function-on-rn]]).

[F2] Calculus: the chain rule gives $\partial_t[\varphi(t,y+ct)]=\varphi_t(t,y+ct)+c\varphi_x(t,y+ct)$ at $y=x-ct$, and the fundamental theorem of calculus with compact support gives $\int_{\mathbb R}\varphi_x(t,x)\,dx=0$ and $\int_0^T\varphi_t(t,x)\,dt=0$ for compactly supported $\varphi$ ([[thm-chain-rule]], [[thm-ftc-second-part]]).

[F3] Entropy pairs for an affine flux: $q'=\eta'f'=c\eta'$, so $q=c\eta+C$ on the real line; a jump of the translated profile has $[q]=c[\eta]+[C]=c[\eta]$, hence zero production $[q]-c[\eta]=0$ ([[def-convex-entropy-entropy-flux-pair]], [[def-kruzhkov-entropy-solution]]).

[F4] The semigroup: for a locally Lipschitz $C^1$ flux and data in $L^1\cap L^\infty$ the entropy solution is unique and the flow defines $S_t$; for $f(0)=0$ globally Lipschitz it extends to all of $L^1$ ([[thm-entropy-solution-semigroup-on-lone]], [[def-countable-choice]], [[def-dependent-choice]]); translation is continuous in $L^1$, so $\|u_0(\cdot-ct)-u_0\|_1\to0$ as $t\downarrow0$ ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[def-translation-of-a-function-on-rn]]).

## Proof

**Proof technique:** direct.

1.1 **The translate solves the conservation law.** Substituting $y=x-ct$ in the weak pairing and using [F1]: $\int_{\Pi_T}\bigl(u\varphi_t+f(u)\varphi_x\bigr)dx\,dt=\int_{\Pi_T}\bigl(u_0(y)\varphi_t(t,y+ct)+c\,u_0(y)\varphi_x(t,y+ct)+d\,\varphi_x(t,y+ct)\bigr)dy\,dt$. The constant term vanishes, by [F2] applied to $\varphi_x$; the remaining terms equal $\int_{\Pi_T}u_0(y)\,\partial_t[\varphi(t,y+ct)]\,dy\,dt$ by the chain rule, which is $0$ because $\varphi$ has compact support in time. Hence $u$ is a distributional weak solution of $u_t+\partial_x(cu+d)=0$. [F1, F2]


1.2 **Zero entropy production.** Let $(\eta,q)$ be any locally Lipschitz convex pair with $q'=\eta'f'=c\eta'$, so $q=c\eta+C$ by [F3]. Applying the same substitution to $\eta(u(t,x))=\eta(u_0(x-ct))$ and $q(u)=c\,\eta(u_0(x-ct))+C$ gives $\int_{\Pi_T}\bigl(\eta(u)\varphi_t+q(u)\varphi_x\bigr)=\int_{\Pi_T}\eta(u_0(y))\bigl[\varphi_t(t,y+ct)+c\varphi_x(t,y+ct)\bigr]dy\,dt+C\int_{\Pi_T}\varphi_x=\int_{\Pi_T}\eta(u_0(y))\,\partial_t[\varphi(t,y+ct)]\,dy\,dt+0=0$, using the chain rule [F2] and the vanishing of the constant term there. Thus the entropy production vanishes in distributions; for a jump already present in $u_0$ this is the statement $[q]-c[\eta]=0$ of [F3], so the jump keeps its states and produces no dissipation. [F1, F2, F3]


2.1 **Initial trace and identification with the semigroup.** The initial trace is immediate: $u(t,x)=u_0(x-ct)$ gives $\|u(t,\cdot)-u_0\|_1=\|u_0(\cdot-ct)-u_0\|_1\to0$ as $t\downarrow0$ by translation continuity in $L^1$ [F4]. The profile is therefore a Kruzhkov entropy solution with datum $u_0$ (weak equation, all entropy inequalities, strong trace), and by uniqueness in [F4] it agrees with the semigroup flow: $S_tu_0=u_0(\cdot-ct)$ for all $t\ge0$. [F3, F4, step 1.1, step 1.2] ∎
