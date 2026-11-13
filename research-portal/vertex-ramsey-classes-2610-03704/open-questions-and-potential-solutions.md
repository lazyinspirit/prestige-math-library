---
title: Open questions and potential solutions
research_report: open-questions
description: Insights, fruitful questions and potential solutions arising from
  Non-isomorphic graphs have distinct vertex-Ramsey classes.
status: draft
---

## 1. Research insights beyond the article

### Research insight 01 · Exact order of the smallest ordinary distinguishing host

#### Insight

**Kind:** corollary

**Evidence status:** proved

For non-isomorphic finite nonempty graphs $H_1,H_2$ and an integer $k\geq1$, let $s_k(H_1,H_2)$ be the minimum $|V(G)|$ over graphs belonging to exactly one of their ordinary $k$-colour vertex-Ramsey classes. Then $s_k(H_1,H_2)=k(\min\{|H_1|,|H_2|\}-1)+1$. Consequently targets of order at most $n$ are determined up to isomorphism by membership tests on hosts of order at most $k(n-1)+1$.

#### Why it matters

Turns qualitative distinguishability into an optimal finite testing threshold, connecting the result to identification from class-membership queries.

#### Originality

Neither the minimum-separator parameter, its optimality nor the finite-test interpretation is stated in any of the four article pages. The upper bounds are exactly the authors’ constructions; the lower bound is elementary. No worldwide novelty or priority is claimed.

#### Current knowledge

Proved here as a consequence of the checked constructions and the explicit counting argument below; searches for vertex-Ramsey class separator bounds did not establish an independent novelty claim.

#### Argument and next steps

Put $n=\min\{|H_1|,|H_2|\}$. Every host with at most $k(n-1)$ vertices can be partitioned into $k$ colour classes of size at most $n-1$; thus it forces neither target. For different target orders, $K_{k(n-1)+1}$ forces the smaller graph and admits a colouring with class sizes at most $n$, avoiding the larger graph. For equal orders $n$ and $k\geq2$, orient the targets so $H_1$ is not a subgraph of $H_2$. The authors’ host $H_2\vee K_{(k-1)(n-1)}$ has exactly $k(n-1)+1$ vertices. Any $k$-colouring supplies $n$ equal-coloured vertices; keep the selected vertices in the $H_2$ part and map the unselected target vertices into the selected universal clique vertices to embed $H_2$. Colouring the $H_2$ part red and assigning $n-1$ clique vertices to each other colour avoids $H_1$. For $k=1$ and equal orders, the same orientation makes $H_2$ itself a separator. These give the matching upper bounds; $n=1$ is covered by the singleton host. For a finite target-order bound, every pair has such a host within the stated test set, proving identification.

#### Remaining gaps

Ordinary vertex copies only; this exact formula is not asserted for induced copies, edge colours, a restricted direction of separation, or the number of queries needed.

#### Sources

- Non-isomorphic graphs have distinct vertex-Ramsey classes — Axenovich and Schmitteckert, arXiv:2610.03704v1: https://arxiv.org/abs/2610.03704; Frozen PDF pp. 1–4, complete text and all rendered pages; p. 1, Theorem 1.1 and introductory edge-Ramsey question; p. 2, Lemma 2.1 and Section 3 ordinary separators; pp. 3–4, induced recursive separation. Reading limits: All four frozen PDF pages, Figure 1, extracted claim inventories and proofs read. The arXiv abstract/version page was checked separately. Article attribution is not an independent prerequisite or proof of its own claims.

### Research insight 02 · Connectivity recovered from minimal induced-Ramsey hosts

#### Insight

**Kind:** connection

**Evidence status:** proved

Fix an integer $k\geq1$. A finite nonempty target $H$ is connected if and only if every vertex-minimal graph $G$ in its induced $k$-colour vertex-Ramsey class is connected. Here vertex-minimal means that no proper induced subgraph of $G$ still belongs to the class. For connected $H$, an arbitrary finite disjoint union belongs to the class exactly when at least one component does.

#### Why it matters

Relates the article’s repetition criterion to minimal obstructions and permits componentwise membership testing for connected targets.

#### Originality

The article treats repetitions of identical hosts in Lemma 2.1. It does not state the arbitrary-component formulation or the characterization using vertex-minimal hosts. These are elementary consequences, with no claim of worldwide novelty.

#### Current knowledge

Proved below using Lemma 2.1’s checked witness construction and finite vertex deletion; no external minimal-host classification is assumed.

#### Argument and next steps

If H is connected and every component of G has a k-colouring avoiding an induced monochromatic H, combine those colourings using one common palette. A connected copy of H cannot meet two components, so this colouring avoids H in G. Conversely a component forcing H also forces it in the entire host. Thus a disconnected Ramsey host has a proper component that is itself Ramsey and cannot be vertex-minimal. If H is disconnected, the article constructs A containing no induced H and qA forcing H. Among the induced subgraphs of finite qA that force H choose one with fewest vertices, say M. It is vertex-minimal. Were M connected, it would lie in one copy of A and therefore contain no induced H at all, contradicting its Ramsey property under a constant colouring. Hence M is disconnected, proving the converse.

#### Remaining gaps

Minimality is under induced vertex deletion, not arbitrary edge deletion. The converse asserts existence of a disconnected minimal host, not that every minimal host for a disconnected target is disconnected.

#### Sources

- Non-isomorphic graphs have distinct vertex-Ramsey classes — Axenovich and Schmitteckert, arXiv:2610.03704v1: https://arxiv.org/abs/2610.03704; Frozen PDF pp. 1–4, complete text and all rendered pages; p. 1, Theorem 1.1 and introductory edge-Ramsey question; p. 2, Lemma 2.1 and Section 3 ordinary separators; pp. 3–4, induced recursive separation. Reading limits: All four frozen PDF pages, Figure 1, extracted claim inventories and proofs read. The arXiv abstract/version page was checked separately. Article attribution is not an independent prerequisite or proof of its own claims.

## 2. Potentially fruitful questions

### Research question 01

#### Research question

Do there exist two finite connected non-isomorphic graphs H1,H2 such that, for every finite graph G, every red-blue edge-colouring of G has a monochromatic ordinary H1 if and only if every such colouring has a monochromatic ordinary H2?

#### Why it matters

This is the precise two-edge-colour question motivating the vertex theorem. Its negative resolution would extend graph identification by Ramsey classes to the connected edge-colouring setting.

#### Originality

Explicitly raised on article p. 1 and by Fox et al., Question 4.3; it is not a new question. The full article proves the vertex analogue only. The two-edge-colour convention comes from Fox et al., rather than an unspecified edge parameter.

#### Current knowledge

Checked 13 November 2026: Allin–Barkey–Clemens (September 2026), Section 6 before Theorem 6.7, explicitly reports it unsolved. Fox et al. exclude a clique paired with any other connected graph. Searches found no subsequent general resolution; this is a bounded literature-status review.

#### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

The equal-class possibility is excluded for any two unequal nontrivial stars; a separate known theorem also excludes clique-versus-other-connected pairs. The unrestricted question remains unresolved.

#### Argument and next steps

For $S_a=K_{1,a}$ and $S_b=K_{1,b}$ with $1\leq a<b$, use the host star $K_{1,2a-1}$. Any red-blue colouring gives at least $a$ edges of one colour at its centre, forcing $S_a$. Colour $a-1$ edges red and $a$ edges blue. Both colour degrees at the centre are below $b$, and every leaf has degree at most $1<b$, so no monochromatic $S_b$ occurs. Hence the two edge-Ramsey classes differ. The clique case is the attributed Fox et al. theorem, not an additional local proof.

#### Remaining gaps

Only restricted families are separated. The star argument neither handles a star against every connected graph nor provides a method for all connected pairs.

#### Sources

- Non-isomorphic graphs have distinct vertex-Ramsey classes — Axenovich and Schmitteckert, arXiv:2610.03704v1: https://arxiv.org/abs/2610.03704; Frozen PDF pp. 1–4, complete text and all rendered pages; p. 1, Theorem 1.1 and introductory edge-Ramsey question; p. 2, Lemma 2.1 and Section 3 ordinary separators; pp. 3–4, induced recursive separation. Reading limits: All four frozen PDF pages, Figure 1, extracted claim inventories and proofs read. The arXiv abstract/version page was checked separately. Article attribution is not an independent prerequisite or proof of its own claims.
- Fox, Grinshpun, Liebenau, Person and Szabó, What is Ramsey-equivalent to a clique? (2014): https://page.mi.fu-berlin.de/szabo/PDF/ramseyequivalent.pdf; PDF p. 1, abstract and two-edge-colour convention; PDF pp. 2–3, Theorems 1.1 and 1.3; PDF p. 4, circuit convention and Lemma 2.2; PDF p. 12, Questions 4.3 and 4.4. Reading limits: Read listed statements, conventions and surrounding passages. No complete replay of the clique-separation proofs; the known clique special case is attributed, not newly proved here.
- Allin, Barkey and Clemens, Ramsey-type results for Maker-Breaker games, arXiv:2609.02588v1 (2026): https://arxiv.org/html/2609.02588v1; Section 6, paragraph headed Equivalent graphs for cliques, immediately before Theorem 6.7. Reading limits: Read the explicit status discussion distinguishing the unresolved two-edge-colour question from its Maker–Breaker analogue; surrounding theorem and proof were viewed. No use of the game result as a Ramsey-equivalence proof.

## 3. Potential solutions to open questions

### Potential solution 01

#### Research question

Can two non-isomorphic connected graphs have identical ordinary red-blue edge-Ramsey classes?

#### Question source

**Origin:** Original authors

https://arxiv.org/abs/2610.03704; PDF p. 1, Introduction, paragraph after Theorem 1.1; original external formulation: Fox et al., PDF p. 12, Question 4.3

#### Why it matters

An explicit separator in a tractable connected family gives a checkable partial answer without confusing the solved vertex analogue with the edge question.

#### Originality

The question occurs in the original article; the star-family separator is elementary and is not claimed as new. Axenovich–Rollin–Ueckerdt v2’s abstract reports the strictly stronger known result separating every star from every other connected graph.

#### Current knowledge

The general problem is still reported unsolved in the checked September 2026 primary source. This entry reproves only the elementary star-versus-star subcase; it does not claim a new solution of the broader known star theorem.

#### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

For integers $1\leq a<b$, $K_{1,2a-1}$ lies in the ordinary two-edge-colour Ramsey class of $K_{1,a}$ but not that of $K_{1,b}$.

#### Argument and next steps

All three graphs are finite simple and connected, and the two targets have different orders. The host has $2a-1$ edges incident with its centre. In every red-blue colouring one colour occurs on at least $a$ of them, forming $K_{1,a}$. For nonmembership for $K_{1,b}$, give $a-1$ host edges one colour and the remaining $a$ edges the other. At the centre the two colour degrees are $a-1$ and $a$, both at most $b-1$. Each leaf has degree one, also below $b$ because $b\geq2$. Thus no vertex can be the centre of a monochromatic $K_{1,b}$. This verifies both Ramsey assertions, including $a=1$.

#### Remaining gaps

This proves a negative answer only within the unequal-star subfamily. No argument for arbitrary connected pairs is supplied; the known stronger star and clique results are attributed rather than presented as new progress.

#### Sources

- Non-isomorphic graphs have distinct vertex-Ramsey classes — Axenovich and Schmitteckert, arXiv:2610.03704v1: https://arxiv.org/abs/2610.03704; Frozen PDF pp. 1–4, complete text and all rendered pages; p. 1, Theorem 1.1 and introductory edge-Ramsey question; p. 2, Lemma 2.1 and Section 3 ordinary separators; pp. 3–4, induced recursive separation. Reading limits: All four frozen PDF pages, Figure 1, extracted claim inventories and proofs read. The arXiv abstract/version page was checked separately. Article attribution is not an independent prerequisite or proof of its own claims.
- Fox, Grinshpun, Liebenau, Person and Szabó, What is Ramsey-equivalent to a clique? (2014): https://page.mi.fu-berlin.de/szabo/PDF/ramseyequivalent.pdf; PDF p. 1, abstract and two-edge-colour convention; PDF pp. 2–3, Theorems 1.1 and 1.3; PDF p. 4, circuit convention and Lemma 2.2; PDF p. 12, Questions 4.3 and 4.4. Reading limits: Read listed statements, conventions and surrounding passages. No complete replay of the clique-separation proofs; the known clique special case is attributed, not newly proved here.
- Allin, Barkey and Clemens, Ramsey-type results for Maker-Breaker games, arXiv:2609.02588v1 (2026): https://arxiv.org/html/2609.02588v1; Section 6, paragraph headed Equivalent graphs for cliques, immediately before Theorem 6.7. Reading limits: Read the explicit status discussion distinguishing the unresolved two-edge-colour question from its Maker–Breaker analogue; surrounding theorem and proof were viewed. No use of the game result as a Ramsey-equivalence proof.
- Axenovich, Rollin and Ueckerdt, Conditions on Ramsey non-equivalence, arXiv:1501.06320v2: https://arxiv.org/abs/1501.06320v2; arXiv abstract, final two sentences about stars, paths and connected graphs of order at most five. Reading limits: Abstract and version metadata only. Its stronger star result supplies attribution and status context, not a premise of the elementary star-versus-star proof below; the full 31-page proof was not reviewed.

## Review limits

- Status review used primary passages in Fox et al. (2014), the September 2026 Allin–Barkey–Clemens preprint, and the Axenovich–Rollin–Ueckerdt v2 abstract. Targeted web searches covered connected Ramsey equivalence in 2025–2026 and vertex-Ramsey separator bounds. No exhaustive bibliographic or unpublished-work search was performed.
- The two research insights were checked for absence from every page of this article. Absence here is not worldwide novelty; both are elementary consequences with explicit arguments. No quantitative bound for induced separating hosts is claimed.
- The sole open question is already present in the article and external literature. The partial solution is an established elementary special case; neither a general solution nor a new research breakthrough is claimed. Directions are report commentary and supply no logical dependencies to portal items.
