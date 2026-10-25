---
id: def-banach-mazur-category-game
kind: definition
title: "The Banach–Mazur category game on sequence spaces and the real line"
status: published
origin: pipeline
deps: ["def-baire-sequence-space", "def-cantor-sequence-space-for-descriptive-set-theory", "def-gale-stewart-games-on-pruned-trees", "thm-rationals-countable", "lem-rat-embeds-dense", "thm-nested-interval-property"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 7.7, printed p23; natural-number coding in Theorem 7.8, p24; complete relevant proof read 2026-09-09. Rational-interval version proved locally."
      url: "https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf"
---
## Definition

Work in ZF. Let X be Baire space ([[def-baire-sequence-space]]), Cantor space ([[def-cantor-sequence-space-for-descriptive-set-theory]]) or $\mathbb R$, and let $A\subseteq X$. In the **category game** I and II alternate basic-open moves $V_0,V_1,\ldots$, I first, with full-history strategies as in [[def-gale-stewart-games-on-pruned-trees]].

In either sequence space moves are cylinders determined by finite words: the first word is nonempty and each subsequent word properly extends its predecessor. In $\mathbb R$ moves are nonempty bounded rational open intervals satisfying $\overline{V_{n+1}}\subseteq V_n$ and $\operatorname{length}(V_n)<1/(n+1)$. A relative game on a fixed nonempty basic open V requires $V_0\subseteq V$ for cylinders, or $\overline{V_0}\subseteq V$ for intervals. All later rules remain the same.

Each legal full play determines one point. In sequence spaces it is the union of the strictly extending words. For intervals apply [[thm-nested-interval-property]] to their nonempty bounded nested closures, whose lengths tend to zero: the intersection is a singleton x. Because the next closure lies inside each V_n, this x belongs to every V_n. I wins precisely when x belongs to A.

For natural-number coding, code a finite word by its length and iterated pairing $\langle i,j\rangle=(i+j)(i+j+1)/2+j$; the intervals are coded by pairs in a fixed enumeration of the rationals from [[thm-rationals-countable]]. Allow unused numbers as illegal codes. In sequence spaces one can always append a digit. In the real case [[lem-rat-embeds-dense]] supplies a rational interval with closure inside any prescribed nonempty open and as small as the next bound requires. Thus legal continuation sets are nonempty subsets of $\mathbb N$ and have least codes, without choice.

In the full coded natural-number game the first illegal move loses, regardless of later moves. More formally, I's payoff contains the plays with first illegal move by II, together with all wholly legal plays whose resulting point is in A. This is a subset of $\mathbb N^{\mathbb N}$. A winning coded strategy, restricted to its legal consistent histories, cannot make the first illegal move: a legal opponent continuation exists by least codes and would defeat it. Complete its values at inconsistent legal histories by least legal defaults. This gives a legal winning strategy. Neither determinacy nor AC is assumed by the definition.
