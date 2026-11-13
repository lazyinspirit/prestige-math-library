---
id: rem-se-6
kind: remark
domain: mathematics
title: "Remark 6: exact use and zero-trajectory case of unique continuation"
status: draft
proof_strategy: direct
deps:
  - def-se-ucpw
  - lem-se-3-4
  - lem-se-4-5
  - prop-se-4-6
  - prop-se-perturbed-evolution
  - def-se-control-cutoffs
  - math:def-axiom-of-choice
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-se-author-88d8498c76d6-weak-dirichlet-form
  - math:def-parabolic-evolution-triple-and-energy-space
  - math:lem-parabolic-energy-pairing-and-trace
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere
dependency_roles:
  def-se-ucpw: mathematical-premise
  lem-se-3-4: mathematical-premise
  lem-se-4-5: mathematical-premise
  prop-se-4-6: mathematical-premise
  prop-se-perturbed-evolution: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-se-author-88d8498c76d6-weak-dirichlet-form: mathematical-premise
  math:def-parabolic-evolution-triple-and-energy-space: mathematical-premise
  math:lem-parabolic-energy-pairing-and-trace: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
  math:thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  math:thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 5, paragraph after (UCPw), and page 21, Remark 6
      statement: The authors attribute the only use of (UCPw) to the invisible weak
        limit in Proposition 4.6, explain the energy-level formulation using
        Lemma 4.5, and state the zero-trajectory case from Lemma 3.4.
      hypotheses: The article hypotheses (H) and (W), its exterior observation region
        and positive observation time; the general-trajectory continuation
        implication is assumed, not proved.
      reading_limits: Frozen v2 extracted text, PDF page 5 paragraph after (UCPw),
        page 19 Proposition 4.6 proof and page 21 Remark 6. The only-once
        assertion is retained as the authors’ attribution; no exhaustive
        independent audit of every article argument or prerequisite proof is
        claimed.
dependency_level: 18
formulation_deps:
  - def-se-ucpw
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
argument_deps:
  - def-se-ucpw
  - lem-se-3-4
  - lem-se-4-5
  - prop-se-4-6
  - prop-se-perturbed-evolution
  - def-se-control-cutoffs
  - math:def-axiom-of-choice
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-se-author-88d8498c76d6-weak-dirichlet-form
  - math:def-parabolic-evolution-triple-and-energy-space
  - math:lem-parabolic-energy-pairing-and-trace
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere
---

## Statement

Assume the Axiom of Choice and (H): $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact smooth non-trapping obstacle. Let $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and let $w$ satisfy (W), including $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$. Here $H_D^s$ denotes the Dirichlet spectral scale, with $H_D^1(\Omega)=H_0^1(\Omega)$, and $H_0^1(\Omega)$ is the $H^1$-closure of smooth compactly supported functions. Choose an enclosing ball $B_R(0)$ containing $\Theta$ and let $\omega=\{x\in\Omega:|x|>R\}$.

The hypothesis (UCPw) says that a distributional solution $v\in C([0,T];H_0^1(\Omega))$ of $iv_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ which vanishes almost everywhere on $(0,T)\times\omega$ is identically zero. The authors state in Remark 6 that (UCPw) is used only once in their argument, in Proposition 4.6 to eliminate the invisible weak limit of a contradiction sequence. Lemma 4.5 supplies the energy regularity needed for this application. When $w=0$, the free continuation result of Lemma 3.4 gives (UCPw) under the stated assumptions; for a general trajectory the implication remains an explicit hypothesis.

## Statement references

[[def-se-ucpw]]

[[def-se-control-cutoffs]]

[[def-se-dirichlet-scale]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The precise trajectory, distributional solution and observation conventions and the implication (UCPw) are given in [[def-se-ucpw]]. The real smooth cutoff $\varphi$ of [[def-se-control-cutoffs]] satisfies $0\le\varphi\le1$, is positive exactly on $\omega$, and vanishes outside $\omega$. Choice is assumed as in [[math:def-axiom-of-choice]]; [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]] supplies its Countable Choice consequence used by the energy identity.

[F2] Under (H) and (W), [[lem-se-4-5]] upgrades a solution $U(t)v_0$ with $v_0\in H_D^\sigma$, $\sigma\in\{-2,-1\}$, and $\varphi U(t)v_0=0$ for all $t\in[0,T]$ to a path in $C([0,T];H_0^1(\Omega))$. The mild propagator and its uniqueness at the relevant scale are supplied by [[prop-se-perturbed-evolution]].

[F3] The proof of [[prop-se-4-6]] obtains such an invisible weak limit and uses (UCPw) after the upgrade to show that this limit is zero. Under (H) and Choice, [[lem-se-3-4]] states that an initial datum in any $H_D^\sigma$, $-2\le\sigma\le2$, whose free Dirichlet evolution is annihilated by $\varphi$ throughout $[0,T]$ is zero. We will apply it at $\sigma=0$.

[F4] [[def-se-dirichlet-scale]] supplies the full completed spectral scale, $H_D^0=L^2$, $H_D^1=H_0^1$ with its $H^1$ norm, and $H_D^{-1}$ as the pivot antidual of $H_D^1$. [[prop-se-scale-flow]] supplies $W(t)=e^{it\Delta_D}$, with $W(\cdot)a\in C([0,T];H_D^1)\cap C^1([0,T];H_D^{-1})$ and $\partial_tW(t)a=i\Delta_DW(t)a$ for $a\in H_D^1$.

[F5] [[lem-se-author-88d8498c76d6-weak-dirichlet-form]] supplies the dense closed form $q(u,\eta)=\int_\Omega(u\overline\eta+\nabla u\cdot\overline{\nabla\eta})$ on $H_0^1(\Omega)$ and its representing operator $A=I-\Delta_D$. Its form identity and the common-core completion in [[def-se-dirichlet-scale]] identify $\Delta_D:H_D^1\to H_D^{-1}$ with the bounded weak operator $\langle\Delta_Du,\eta\rangle=-\int_\Omega\nabla u\cdot\overline{\nabla\eta}$. In particular its antidual norm is at most $\|u\|_{H^1}$ by Cauchy–Schwarz in [[math:thm-cauchy-schwarz-in-an-inner-product-space]], applied to the vector-valued $L^2$ gradient pairing.

[F6] [[math:def-parabolic-evolution-triple-and-energy-space]] defines a real Hilbert evolution triple $V\hookrightarrow H\hookrightarrow V^*$ and its weak time derivative by separated scalar-time and $V$-space tests. Under Countable Choice, [[math:lem-parabolic-energy-pairing-and-trace]] gives, for $d\in L^2(0,T;V)$ with $d'\in L^2(0,T;V^*)$, a continuous $H$ representative and $\|d(t)\|_H^2-\|d(s)\|_H^2=2\int_s^t\langle d'(r),d(r)\rangle_{V^*,V}\,dr$. This abstract result does not require the spatial domain to be bounded.

[F7] The Justification of [[def-se-ucpw]] supplies, for each energy-level path $v$, a jointly measurable representative $U\in L^2(Q)$ on $Q=(0,T)\times\Omega$ with $[U(t,\cdot)]=v(t)$ in $L^2(\Omega)$ for almost every $t$. It also identifies Euclidean Lebesgue measure on this cylinder with the completed product of the sigma-finite time and spatial Lebesgue factors. Under Countable Choice, supplied by [F1], [[math:thm-tonelli-and-fubini-for-completed-product-measures]] gives measurable spatial sections outside a null set of times and equality of the product and iterated integrals for nonnegative completed-product measurable functions. [[math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere]] says that a nonnegative measurable function on any measure space has integral zero exactly when it vanishes almost everywhere.

## Proof

**Given:** The hypotheses and conventions of the Statement.

**Goal:** Explain the energy-level use of (UCPw) and establish its zero-trajectory case for every distributional energy solution.

1.1 In the contradiction argument for the conditional observability estimate, the weak limit gives an adjoint trajectory annihilated by $\varphi$. Lemma 4.5 makes that trajectory energy-continuous. Since $\varphi$ is positive on $\omega$, local division of a compactly supported test function by $\varphi$ shows that the trajectory vanishes on $(0,T)\times\omega$; (UCPw) then makes it identically zero. This is the application recorded in Proposition 4.6, so the hypothesis need only be formulated at the energy level for that step. The assertion that it is the only use in the article is retained as the authors' attribution in Remark 6. [F1, F2, F3, given]

1.2 Suppose $w=0$ and let $v$ be any distributional energy-level solution covered by (UCPw). Regard $V=H_0^1(\Omega;\mathbb C)$ and $H=L^2(\Omega;\mathbb C)$ as real Hilbert spaces, with inner products the real parts of the complex ones. The dense closed form gives completeness of $V$ and density of its continuous inclusion in $H$, hence the evolution triple of [F6]. For $u,\eta\in V$ define the real functional $(Bu)(\eta)=\operatorname{Re}(-i\int_\Omega\nabla u\cdot\overline{\nabla\eta})$. Cauchy–Schwarz gives $|(Bu)(\eta)|\le\|u\|_{H^1}\|\eta\|_{H^1}$, so $B:V\to V^*$ is bounded. Testing $iv_t+\Delta v=0$ with products of a scalar time test and a conjugated smooth compactly supported spatial test gives $\int_0^T(v(t),\eta)_H\alpha'(t)\,dt=-\int_0^T(Bv(t))(\eta)\alpha(t)\,dt$. The defining $H^1$ density of spatial tests and the displayed bound extend this to every $\eta\in V$. Thus $v'=Bv$ in the real evolution-triple sense. Since $v$ and $Bv$ are norm-continuous on the compact time interval, finite sampled step approximations show strong measurability, and their bounded norms give $v\in L^2(0,T;V)$ and $Bv\in L^2(0,T;V^*)$. [F1, F4, F5, F6, given]

2.1 Put $h(t)=W(t)v(0)$. By [F4], $h\in C([0,T];V)$ and $h'=i\Delta_Dh$ in the complex pivot antidual. On the common spectral core, the represented form gives $\langle\Delta_Du,\eta\rangle=-\int_\Omega\nabla u\cdot\overline{\nabla\eta}$; continuity in both $H_D^1$ norms and core density extend the identity to all $u,\eta\in V$. Taking real parts therefore identifies the derivative of $h$ with $Bh$ in the same real dual as in step 1.2. Consequently $d=v-h$ belongs to the evolution space of [F6], satisfies $d'=Bd$, and is already continuous in $H$, with $d(0)=0$. The energy identity applies to this representative and gives $\|d(t)\|_2^2=2\int_0^t\operatorname{Re}(-i\|\nabla d(r)\|_2^2)\,dr=0$. Hence $v(t)=W(t)v(0)$ for every $t\in[0,T]$. This proves the distributional-to-free-evolution bridge locally, rather than appealing to mild-class uniqueness for an arbitrary distributional solution. [F1, F4, F5, F6, step 1.2, algebra]

3.1 Now impose the vanishing condition of (UCPw). Let $U$ be the representative in [F7] and set $N=\{(t,x)\in Q:x\in\omega,\ U(t,x)\ne0\}$. This is a measurable null set for the completed product measure: $U$ is jointly measurable, $\omega$ is open, and (UCPw)'s vanishing condition uses exactly this representative-independent space-time interpretation. The time factor has finite measure $T$, and the spatial factor is sigma-finite, as recorded in [F7]. Apply completed-product Tonelli in [F7] to $\mathbf1_N$. Outside a measurable null set of times its section integral is $I(t)=|N_t|$, where $N_t=\{x\in\Omega:(t,x)\in N\}$ and $|\cdot|$ denotes spatial Lebesgue measure; assigning zero on the exceptional time set makes $I$ measurable, with $\int_0^T I(t)\,dt=0$. The zero-integral criterion in [F7] gives $|N_t|=0$ for almost every $t$. Intersecting this full-measure set with the one where $[U(t,\cdot)]=v(t)$ identifies these spatial sections with the path: $v(t)$ vanishes almost everywhere on $\omega$ for almost every time. Since $\varphi$ vanishes outside $\omega$, this gives $\varphi v(t)=0$ as an $L^2$ class for almost every time. Multiplication by $\varphi$ has $L^2$ norm at most one, so $t\mapsto\varphi v(t)$ is $L^2$-continuous and is therefore zero for every $t\in[0,T]$. By step 2.1 it equals $\varphi W(t)v(0)$. The datum belongs to $H_D^1=H_0^1\subset H_D^0=L^2$, so Lemma 3.4 at index zero makes $v(0)=0$. Step 2.1 then makes the whole path zero. This establishes (UCPw) for $w=0$; the general-trajectory implication remains an explicit hypothesis. [F1, F3, F4, F7, step 2.1] ∎

## Source notes

The article is cited for attribution of the only-once assertion and the scope of Remark 6. The distributional-to-free-evolution bridge in steps 2.1–2.2 is a locally authored energy argument using the named suppliers, not a proof attributed to the article. The Choice assumption records the hypotheses of those suppliers. The mathematical flow and form suppliers ultimately use Physics Library items whose actual domain is mathematics; no physical premise is used.
