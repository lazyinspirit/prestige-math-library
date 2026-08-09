---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
