---
id: thm-folner-criterion-for-locally-compact-groups
kind: theorem
title: The Følner criterion for locally compact groups
status: draft
origin: pipeline
dependency_level: 7
proof_strategy: direct
deps:
  - thm-amenability-is-equivalent-to-reiter-p1
  - lem-folner-nets-give-reiter-nets
  - def-left-folner-net-for-a-locally-compact-group
  - def-amenable-locally-compact-group
  - def-reiter-condition-p1
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - lem-layer-cake-identity-for-nonnegative-integrable-functions
  - thm-chebyshev-markov-inequality-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-locally-compact-space
  - def-topological-group
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - def-hausdorff-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-borel-sigma-algebra
  - def-axiom-of-choice
  - def-countable-choice
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
axiom_use: >-
  Assume AC. It is used through the amenability/Reiter equivalence, strong L1
  translation continuity, and to supply ACω for the layer-cake supplier. No
  separate Dependent Choice assumption is added.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.5, Theorem G.5.1 and its complete proof (printed pp. 466–469); the Reiter-to-Følner extraction starts with an identity-containing compact set"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Følner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Slides 14–18, PDF pp. 14–18: the Reiter-to-Følner extraction and its identity-containing compact test-set hypothesis"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with fixed left Haar measure $\mu$. Then $G$ is amenable ([[def-amenable-locally-compact-group]]) if and only if it satisfies the left Følner condition ([[def-left-folner-net-for-a-locally-compact-group]]): for every compact $Q\subseteq G$ and every $\varepsilon>0$ there is a Borel set $F\subseteq G$ with $0<\mu(F)<\infty$ and $\Delta_Q(F)\le\varepsilon$. Equivalently, $G$ admits a left Følner net. Borel sets suffice for $F$.

## Facts & Assumptions

**Given:** AC, a locally compact Hausdorff group $G$, and a fixed left Haar measure $\mu$.

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]). It implies AC$\omega$: for any sequence $(X_n)$ of nonempty sets, apply AC to the range family $\{X_n:n\in\mathbb N\}$ and use the resulting selector at each $X_n$ ([[def-countable-choice]]).

[F1] Amenability is equivalent to Reiter's condition (P1) for locally compact Hausdorff groups under AC; (P1) means compact-uniform approximate invariance of nonnegative norm-one $L^1$ functions ([[thm-amenability-is-equivalent-to-reiter-p1]], [[def-reiter-condition-p1]]).

[F2] For nonnegative $f\in L^1(G)$, its superlevel sets $E_t=\{y:f(y)\ge t\}$ satisfy $\int_0^\infty\mu(E_t)\,dt=\|f\|_1$ and $\int_0^\infty\mu(E_t\mathbin\triangle E'_t)\,dt=\|f-g\|_1$ for any nonnegative $g\in L^1(G)$ with corresponding superlevel sets $E'_t$; no global $\sigma$-finiteness of Haar measure is required ([[lem-layer-cake-identity-for-nonnegative-integrable-functions]]).

[F3] If $f\ge0$ and $\|f\|_1=1$, then $\mu(\{f\ge t\})\le1/t$ for every $t>0$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[F4] Left Haar measure is left invariant, finite on compact sets, and positive on nonempty open sets ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F5] Under AC, $x\mapsto L_xu$ is norm-continuous in $L^1(G)$ for each $u\in L^1(G)$, and every $L_x$ is an isometry ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F6] Every identity in a locally compact Hausdorff group has a compact neighbourhood; finite products of compact spaces are compact, and continuous images of compact spaces are compact ([[def-locally-compact-space]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-topological-group]]).

[F7] Tonelli interchanges nonnegative integrals on a product of $\sigma$-finite measure spaces, and pointwise limits of measurable real functions are measurable ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F8] For a Borel set $F$ with $0<\mu(F)<\infty$, the normalized indicator $\mu(F)^{-1}\mathbf1_F$ is a Reiter probability density with translation defect exactly $\mu(xF\mathbin\triangle F)/\mu(F)$ ([[lem-folner-nets-give-reiter-nets]]).

[F9] A net of positive finite-measure Borel sets satisfies the left Følner condition exactly when the single-set condition in the Statement holds ([[def-left-folner-net-for-a-locally-compact-group]]).

[F10] A compact subset of a Hausdorff space is closed, hence Borel ([[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]).

[F11] $L^1(G)$ is formed from measurable functions for the fixed Borel Haar measure; every class therefore has a Borel representative, and replacing a representative by its positive part preserves its class when the class is nonnegative ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-left-haar-integral-and-left-haar-measure]], [[def-borel-sigma-algebra]]).

[F12] Amenability of $G$ means existence of a left-invariant mean on $L^\infty(G)$ ([[def-amenable-locally-compact-group]]).

## Proof

**Given:** AC and a locally compact Hausdorff group $G$ with fixed left Haar measure $\mu$.

**Proof technique:** direct.

1.1 Suppose $G$ is amenable in the sense of [F12]. By [F1], $G$ satisfies Reiter's condition (P1). [F1, F12, given]

1.2 Assume (P1), fix a compact target $Q\subseteq G$ and $\varepsilon>0$, and put $\eta:=\varepsilon/2$. Choose a compact neighbourhood $C$ of the identity and an open identity neighbourhood $O\subseteq C$. Set $P:=Q\cup C$ and $K:=P^2$. Then $P$ is compact, contains the identity, and $0<\mu(P)<\infty$ because $O\subseteq P$ and [F4]; $K$ is compact and Borel by [F6] and [F10], and $0<\mu(K)<\infty$ because $P\subseteq K$. Choose $f\in L^1(G)$ with $f\ge0$, $\|f\|_1=1$ and $\sup_{x\in K}\|L_xf-f\|_1\le\eta\mu(P)/(4\mu(K))$, using (P1) with this positive tolerance. [F1, F4, F6, F10, given, construct]

1.3 Conversely, suppose $G$ satisfies the left Følner condition. By [F8], normalized indicators of its Følner witnesses give (P1) (equivalently use a Følner net by [F9]); [F1] then implies that $G$ is amenable in the sense of [F12]. [F1, F8, F9, F12]

2.1 By [F11] choose a nonnegative Borel representative of $f$ and set $E_t:=\{y:f(y)\ge t\}$ for $t>0$. By [F2] and [F3], $\int_0^\infty\mu(E_t)\,dt=1$ and $\mu(E_t)<\infty$ for every $t>0$. For each $t$ with $\mu(E_t)>0$, [F8] applied to $E_t$ gives $\mu(xE_t\mathbin\triangle E_t)=\|L_x\mathbf1_{E_t}-\mathbf1_{E_t}\|_1$; when $\mu(E_t)=0$, both sides vanish by [F4]. Thus the boundary function is continuous in $x$ by [F5]. Put $D(x,t):=\|L_x\mathbf1_{E_t}-\mathbf1_{E_t}\|_1$. On each level interval $[1/n,n]$, for all sufficiently large $m$ put $t_m(t):=2^{-m}\lfloor2^mt\rfloor>0$. Then $t_m(t)\uparrow t$, so the finite-measure sets $E_{t_m(t)}$ decrease to $E_t$ and $\|\mathbf1_{E_{t_m(t)}}-\mathbf1_{E_t}\|_1\to0$ by countable additivity. For fixed $m$, $D(x,t_m(t))$ is product-measurable: it has countably many Borel level-parameter cells, and on each cell is a continuous function of $x$ by [F5]. Isometry gives $|D(x,t_m(t))-D(x,t)|\le2\|\mathbf1_{E_{t_m(t)}}-\mathbf1_{E_t}\|_1$, so taking the pointwise limit proves product measurability on $K\times[1/n,n]$. These intervals cover $(0,\infty)$, proving the needed product measurability without second countability. Since Haar measure restricted to $K$ is finite and the level parameter has $\sigma$-finite Lebesgue measure, [F7] and [F2] give $\int_0^\infty\mu(E_t)r(t)\,dt=\int_K\|L_xf-f\|_1\,d\mu(x)\le\eta\mu(P)/4$, where $r(t):=\int_K\mu(xE_t\mathbin\triangle E_t)/\mu(E_t)\,d\mu(x)$ when $\mu(E_t)>0$, and $r(t):=0$ otherwise. Since $\int_0^\infty\mu(E_t)\,dt=1$, some $t>0$ has $0<\mu(E_t)<\infty$ and $r(t)<\eta\mu(P)/2$. [A1, F2, F3, F4, F5, F7, F8, F11, step 1.2, algebra]

3.1 Fix such a $t$ and put $A:=\{x\in K:\mu(xE_t\mathbin\triangle E_t)/\mu(E_t)\le\eta\}$. The boundary function is continuous, so $A$ is Borel; Markov's inequality gives $\mu(K\setminus A)\le r(t)/\eta<\mu(P)/2$. For any $x\in P$, $xP\subseteq xK\cap K$ because $P\subseteq K$ and $P^2=K$, so $\mu(xK\cap K)\ge\mu(xP)=\mu(P)$. Also $xK\cap K\subseteq(xA\cap A)\cup x(K\setminus A)\cup(K\setminus A)$, hence $\mu(xA\cap A)>0$. Therefore there exist $a_1,a_2\in A$ with $x=a_1a_2^{-1}$. By left invariance and the triangle inequality for symmetric difference, $\mu(xE_t\mathbin\triangle E_t)\le\mu(a_2^{-1}E_t\mathbin\triangle E_t)+\mu(a_1E_t\mathbin\triangle E_t)=\mu(a_2E_t\mathbin\triangle E_t)+\mu(a_1E_t\mathbin\triangle E_t)\le2\eta\mu(E_t)=\varepsilon\mu(E_t)$. Thus $F:=E_t$ is Borel with positive finite measure and satisfies the required estimate for every $x\in P$, hence $\Delta_Q(F)\le\varepsilon$. [F3, F4, F5, F10, step 2.1, algebra]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 prove amenability implies the Følner condition; step 1.3 proves the reverse implication. Step 3.1 produces Borel witnesses even when the condition is initially phrased with measurable sets, and [F9] gives the equivalent net formulation. The only Choice assumption is the stated AC, used through [F1], [F5], and AC$\omega$ for [F2]. [A1, F1, F2, F5, F9, F12, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎






## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.5, Theorem G.5.1 and its proof, states the Følner criterion and gives the complete Reiter-to-Følner level-set extraction for a compact test set containing the identity. The proof here enlarges every target compact set to a compact identity neighbourhood, ensuring the positive finite Haar measure required in the averaging estimates, and justifies the compact-parameter Tonelli step under arbitrary LCH generality. Thomas, Lecture 19, slides 14–18, gives the same extraction route.
