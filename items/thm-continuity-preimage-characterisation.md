---
id: thm-continuity-preimage-characterisation
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous on $A$ if and only if the preimage of every open subset of $\\mathbb{R}$ is the intersection with $A$ of an open subset of $\\mathbb{R}$, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: [thm-continuity-open-preimage-r]
landmark: true
short: "preimage characterisation of continuity"
proof_strategy: direct
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "D. Ernst, Continuous Real Functions"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/08%3A_New_Page/8.5%3A_Continuous_Real_Functions"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$. Call a set
$S \subseteq A$ **relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$, and **relatively closed in $A$** when $S = G \cap A$
for some closed $G \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). For
$V \subseteq \mathbb{R}$ write $f^{-1}(V) := \{\, x \in A : f(x) \in V \,\}$.
Then the following are equivalent.

1. $f$ is continuous on $A$ ([[def-continuity-real]]).
2. $f^{-1}(V)$ is relatively open in $A$ for every open $V \subseteq \mathbb{R}$.
3. $f^{-1}(F)$ is relatively closed in $A$ for every closed $F \subseteq \mathbb{R}$.

**"Relatively open" is defined here inline, and on purpose.** At this point in
the reading order this library has no subspace-topology item for $\mathbb{R}$,
and the metric one ([[def-isometry-and-metric-embedding]]) may not be reached
before [[lem-real-and-metric-notions-agree]] has said that the two vocabularies
agree, which is later on this page. The phrase above is therefore an
abbreviation for the displayed condition and nothing more.

**The preimage is taken inside $A$.** $f^{-1}(V)$ is a subset of $A$, never of
$\mathbb{R}$, so claim 2 does **not** say that preimages of open sets are open.
They are open only when $A$ is itself open: then $U \cap A$ is an intersection
of two open sets, hence open ([[thm-open-set-algebra-r]]). For $A = [0,1]$ and
$f$ the identity, $f^{-1}\bigl((-1,1/2)\bigr) = [0,1/2)$ is not open, and it is
the trace on $A$ of the open set $(-1,1/2)$.

**No choice principle is used.** The open set witnessing claim 2 is not selected
point by point; it is *constructed* as a single union over a family cut out by a
property, which is the device the proof below makes explicit.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$; for $V \subseteq \mathbb{R}$, $f^{-1}(V) = \{\, x \in A : f(x) \in V \,\}$.

[L1] Continuity of $f$ at $c \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(c)\bigr) \subseteq N_{\varepsilon}(f(c))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets of $\mathbb{R}$: $U$ is open when every $x \in U$ has some $N_{\varepsilon}(x) \subseteq U$; every neighbourhood $N_{\varepsilon}(x)$ is itself open; a set is closed exactly when its complement is open ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] An arbitrary union of open subsets of $\mathbb{R}$ is open ([[thm-open-set-algebra-r]]).

[L4] Set algebra: for $V \subseteq \mathbb{R}$ one has $f^{-1}(\mathbb{R} \setminus V) = A \setminus f^{-1}(V)$; and for $U \subseteq \mathbb{R}$, $A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A$.

## Proof

**Proof technique:** direct.

1.1 **From 1 to 2: the canonical witness.** Assume $f$ is continuous on $A$ and let $V \subseteq \mathbb{R}$ be open. Define $$U \;:=\; \bigcup \bigl\{\, N_{\delta}(x) \ : \ x \in f^{-1}(V),\ \delta \in \mathbb{R},\ \delta > 0,\ f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq V \,\bigr\}.$$ The family being united is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected from it. Each of its members is open by [L2], so $U$ is open by [L3]. [L2, L3]

1.2 **$f^{-1}(V) \subseteq U \cap A$.** Let $x \in f^{-1}(V)$, so $x \in A$ and $f(x) \in V$. Since $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and continuity at $x$ gives, by [L1], a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. So this pair $(x,\delta)$ contributes $N_{\delta}(x)$ to the union, and $x \in N_{\delta}(x)$ by [L2]. Hence $x \in U$, and $x \in A$. [L1, L2]

1.3 **From 2 to 1.** Assume claim 2, let $c \in A$ and let a real $\varepsilon > 0$ be given. The set $V := N_{\varepsilon}(f(c))$ is open by [L2], so $f^{-1}(V) = U \cap A$ for some open $U \subseteq \mathbb{R}$. Since $|f(c) - f(c)| = 0 < \varepsilon$ we have $c \in f^{-1}(V)$, hence $c \in U$, and [L2] gives a real $\delta > 0$ with $N_{\delta}(c) \subseteq U$. Every $x \in A$ with $|x - c| < \delta$ then lies in $U \cap A = f^{-1}(V)$, so $f(x) \in N_{\varepsilon}(f(c))$, that is $|f(x) - f(c)| < \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is continuous on $A$. [L1, L2]

2.1 **$U \cap A \subseteq f^{-1}(V)$.** Let $y \in U \cap A$. Then $y \in N_{\delta}(x)$ for some pair $(x,\delta)$ occurring in the union, so $y \in A \cap N_{\delta}(x)$ and therefore $f(y) \in V$ by the defining property of that pair. Hence $y \in f^{-1}(V)$. [step 1.1]

3.1 **Claim 2 holds.** By steps 1.2 and 2.1, $f^{-1}(V) = U \cap A$ with $U$ open, so $f^{-1}(V)$ is relatively open in $A$; and $V$ was an arbitrary open subset of $\mathbb{R}$. [step 1.1, step 1.2, step 2.1]

4.1 **2 and 3 are equivalent.** Let $F \subseteq \mathbb{R}$ be closed and put $V := \mathbb{R} \setminus F$, which is open by [L2]. If claim 2 holds then $f^{-1}(V) = U \cap A$ with $U$ open, and by [L4] $$f^{-1}(F) = A \setminus f^{-1}(V) = A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A ,$$ with $\mathbb{R} \setminus U$ closed by [L2]; so $f^{-1}(F)$ is relatively closed. The converse runs the same computation in the other direction, starting from an open $V$, putting $F := \mathbb{R} \setminus V$ and using $f^{-1}(V) = A \setminus f^{-1}(F)$. [step 3.1, L2, L4]

5.1 Statements 1, 2 and 3 are therefore equivalent, and the passage from 1 to 2 selected nothing. [step 3.1, step 1.3, step 4.1] ∎

## Remarks

- **Why the union, and not a choice of $\delta$ at each point.** The textbook proof says "for each $x \in f^{-1}(V)$ pick $\delta_x$", which is a choice function on a subset of $\mathbb{R}$ that may be uncountable. Nothing in this library licenses that. Uniting *all* admissible balls avoids the issue completely: the family is defined by a property, membership of $x$ in $U$ needs only the existence of one admissible $\delta$ for that single $x$, and the reverse inclusion needs only the defining property of whichever pair happens to catch $y$.

- **The dual form is not "preimages of closed sets are closed".** As with claim 2, the preimage lives in $A$, and it is relatively closed. The image direction fails outright: a continuous function may carry a closed set to a set that is not closed, which is [[fs-continuous-image-of-a-closed-set-is-closed]].

- **This is the statement that survives when $\mathbb{R}$ is replaced by a metric space or a topological space.** The metric version at this point in the reading order is [[def-metric-topology]] together with [[def-metric-continuity]], and the agreement of the two vocabularies for $A \subseteq \mathbb{R}$ is [[lem-real-and-metric-notions-agree]], later on this page.
