---
id: ex-folner-sets-in-rn
kind: example
title: Følner sets in $\mathbb R^n$
status: published
origin: pipeline
dependency_level: 8
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-measure
  - prop-measure-monotonicity
  - def-left-haar-integral-and-left-haar-measure
  - cor-rn-is-locally-compact-and-sigma-compact
  - lem-metrics-on-rn
  - def-topological-group
  - thm-metric-hausdorff-separation
  - thm-compact-subset-is-closed-and-bounded
  - def-metric-bounded-diameter
  - def-metric-ball
  - def-directed-set-and-net
  - def-left-folner-net-for-a-locally-compact-group
  - thm-binomial-theorem
  - def-binomial-coefficient
  - def-canonical-natural
  - def-integer-power
  - def-finite-sum
  - def-real-order
  - thm-folner-criterion-for-locally-compact-groups
axiom_use: >-
  Assume full AC. It supplies AC_omega for the Lebesgue box-volume and Radon
  suppliers and is required by the Følner criterion's Reiter-to-amenability
  implication. The cubes and their directed net are explicit; no additional
  dependent-choice assumption is introduced.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.5, Theorem G.5.1 and complete proof (printed pp. 466-469) gives the general locally compact Følner criterion; Example G.5.4 (printed p. 469) treats intervals in Z only. The explicit R^n cube estimate is proved locally here."
    - title: "Jose Manuel Garcia Garrido, An Introduction to Amenable Groups (author-hosted lecture notes, University of Duesseldorf)"
      url: "https://www.math.uni-duesseldorf.de/~garrido/amenable.pdf"
      locator: "Section 3.1, Definition 3.1 and Example 3.5: the discrete Følner condition and intervals in Z; this supplies context only, not the Euclidean cube estimate, which is proved locally."
---

## Statement

Assume AC. Let $n\ge1$, let $G=\mathbb R^n$ be the additive group with its
Euclidean topology, and let $\lambda_n$ be Lebesgue measure. Then $\lambda_n$
is a left Haar measure on $G$. For every compact $Q\subseteq\mathbb R^n$,
choose $R\ge0$ such that $Q\subseteq[-R,R]^n$, and for $t>0$ put
$C_t:=[-t,t]^n$. Then
$$\Delta_Q(C_t)=\sup\Bigl(\{0\}\cup\Bigl\{\frac{\lambda_n((x+C_t)\mathbin\triangle C_t)}{\lambda_n(C_t)}:x\in Q\Bigr\}\Bigr)\le2\bigl((1+R/t)^n-1\bigr)\xrightarrow[t\to\infty]{}0,$$
where $\Delta_Q$ is the left Følner defect of
[[def-left-folner-net-for-a-locally-compact-group]]. In particular
$(C_t)_{t>0}$ is a left Følner net, $G$ satisfies the left Følner condition,
and $\mathbb R^n$ is amenable by
[[thm-folner-criterion-for-locally-compact-groups]].

## Facts & Assumptions

**Given:** AC, an integer $n\ge1$, Euclidean $\mathbb R^n$ with addition, Lebesgue measure $\lambda_n$, and a compact $Q\subseteq\mathbb R^n$.

[A1] AC is the choice-function principle and supplies countable choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] The Euclidean metric makes $\mathbb R^n$ Hausdorff, addition is continuous by the metric triangle inequality and translation invariance, and inversion $x\mapsto-x$ is an isometry; $\mathbb R^n$ is locally compact ([[lem-metrics-on-rn]], [[thm-metric-hausdorff-separation]], [[def-topological-group]], [[cor-rn-is-locally-compact-and-sigma-compact]]).

[F2] Under countable choice, the Lebesgue measurable sets form a sigma-algebra and $\lambda_n$ is a complete measure ([[thm-lebesgue-measure-is-a-complete-measure]]); $\lambda_n$ is also Radon ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]]).

[F3] Lebesgue measure and measurability are translation invariant; in particular $\lambda_n(x+E)=\lambda_n(E)$ for every Lebesgue-measurable set $E$ and vector $x$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] The closed box $[-t,t]^n$ and the expanded closed box $[-(t+R),t+R]^n$ are Borel measurable, with measures $(2t)^n$ and $(2(t+R))^n$; these are finite and the first is positive for $t>0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] A measure is countably additive, hence finitely additive on disjoint measurable sets, and it is monotone under inclusion ([[def-measure]], [[prop-measure-monotonicity]]).

[F6] Every compact subset of a metric space is bounded; boundedness means containment in some open metric ball. In $\mathbb R^n$, each coordinate obeys $|x_j|\le d_2(x,0)$, and $d_2$ satisfies the triangle inequality ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[lem-metrics-on-rn]]).

[F7] For a Borel set $F$ of positive finite Haar measure, the left Følner defect is $\Delta_Q(F)=\sup(\{0\}\cup\{\mu(xF\triangle F)/\mu(F):x\in Q\})$, and it is zero for $Q=\varnothing$; a left Følner net is an eventually vanishing net of such sets ([[def-left-folner-net-for-a-locally-compact-group]]).

[F8] A net is a function indexed by a nonempty directed preorder; $(0,\infty)$ with its usual order is directed ([[def-directed-set-and-net]]).

[F9] For $u\in[0,1]$ and $n\ge1$, the binomial theorem gives $(1+u)^n-1=\sum_{k=1}^{n}\iota\binom nk u^k\le u\sum_{k=1}^{n}\iota\binom nk$, since each coefficient is nonnegative and $u^k\le u$ ([[thm-binomial-theorem]], [[def-binomial-coefficient]], [[def-canonical-natural]], [[def-integer-power]], [[def-finite-sum]], [[def-real-order]]).

[F10] Under AC, amenability of an LCH group is equivalent to its satisfying the left Følner condition ([[thm-folner-criterion-for-locally-compact-groups]]).

[F11] A left Haar measure is a nonzero Borel measure, finite on compact sets, Radon, and invariant under all left translations ([[def-left-haar-integral-and-left-haar-measure]]).

## Proof

**Given:** AC, $n\ge1$, Euclidean $\mathbb R^n$ and its Lebesgue measure.

**Proof technique:** direct.

1.1 The metric formula in [F1] gives $d_2(x+y,x'+y')\le d_2(x,x')+d_2(y,y')$ and $d_2(-x,-x')=d_2(x,x')$, so addition and inversion are continuous. By [F1], $\mathbb R^n$ is a locally compact Hausdorff topological group. [F1, construct]

2.1 By [A1], countable choice is available for the Lebesgue Radon and box-volume results [F2, F4]. The box formula gives $\lambda_n([-1,1]^n)=2^n>0$, so $\lambda_n$ is nonzero; [F2] makes it Radon and [F3] makes it left invariant. With step 1.1, these are the Haar conditions of [F11], so $\lambda_n$ is a left Haar measure on $G$. [A1, F2, F3, F4, F11, step 1.1, construct]

2.2 If $Q=\varnothing$, choose $R=0$. Otherwise [F6] gives $x_0\in\mathbb R^n$ and $r>0$ with $Q\subseteq B_2(x_0,r)$. Put $R:=r+d_2(x_0,0)>0$. For $x\in Q$ and each $j<n$, [F6] and the triangle inequality give $|x_j|\le d_2(x,0)\le d_2(x,x_0)+d_2(x_0,0)<R$, so $Q\subseteq[-R,R]^n$. [F6, step 1.1, construct]

3.1 Fix $t>0$ and $x\in Q$, and put $A_x:=x+C_t$. By [F2, F3, F4] the measurable sets $A_x$ and $C_t$ have equal finite measure $(2t)^n$. Their finite additive decompositions over $A_x\cap C_t$ therefore give $\lambda_n(A_x\setminus C_t)=\lambda_n(C_t\setminus A_x)$, hence $\lambda_n(A_x\triangle C_t)=2\lambda_n(A_x\setminus C_t)$. If $y\in A_x\setminus C_t$, write $y=x+z$ with $z\in C_t$; since $x\in[-R,R]^n$ and $z\in[-t,t]^n$, $y\in[-(t+R),t+R]^n\setminus C_t$. By [F4, F5], this outer box minus $C_t$ has measure $(2(t+R))^n-(2t)^n$, and monotonicity bounds $\lambda_n(A_x\setminus C_t)$ by that value. Dividing by $(2t)^n>0$ yields $\lambda_n(A_x\triangle C_t)/\lambda_n(C_t)\le2((1+R/t)^n-1)$. The bound is uniform in $x\in Q$, and when $Q=\varnothing$ the defect is zero by [F7], proving the displayed inequality for every $Q$ and $t>0$. [F2, F3, F4, F5, F7, step 2.1, step 2.2, algebra]

4.1 Every $C_t$ is a closed, hence Borel, box with $0<\lambda_n(C_t)=(2t)^n<\infty$ by [F4], so [F8] indexes a left Følner net by $t\in(0,\infty)$. Fix compact $Q$ and $\varepsilon>0$, and use [F6] to choose its bound $R$ as in step 2.2. If $R=0$, then every $x\in Q$ equals $0$ and the defect is zero. If $R>0$, put $S_n:=\sum_{k=1}^{n}\iota\binom nk$ and $T:=1+R+2S_nR/\varepsilon$. For $t\ge T$, $u:=R/t\in(0,1]$, so [F9] and step 3.1 give $\Delta_Q(C_t)\le2S_nR/t\le\varepsilon$. Thus the net is eventually Følner on every compact $Q$, and $\mathbb R^n$ satisfies the left Følner condition. [F4, F6, F7, F8, F9, step 2.2, step 3.1, algebra]

5.1 By [F10], the left Følner condition proved in step 4.1 implies amenability under the stated AC. Hence $\mathbb R^n$ has all the properties in the Statement. [A1, F10, step 4.1, given] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.5 Theorem G.5.1 and its complete proof (printed pp. 466–469) give the general locally compact Følner criterion. Example G.5.4 (printed p. 469) concerns intervals in $\mathbb Z$, not cubes in $\mathbb R^n$. Garrido, *An Introduction to Amenable Groups*, §3.1 Definition 3.1 and Example 3.5 discuss the discrete condition and intervals in $\mathbb Z$; they provide context only. The Euclidean cube estimate and the one-sided-shell calculation are proved locally here.
