---
id: prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
kind: proposition
title: A map of exact couples induces a map of spectral sequences
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-an-exact-couple-generates-a-spectral-sequence", "def-morphism-of-spectral-sequences", "lem-spectral-sequence-subquotient-and-local-lifting-calculus", "def-exact-couple", "def-derived-exact-couple"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

A morphism of graded exact couples induces a morphism of their derived exact couples and therefore a morphism of their spectral sequences, preserving every bidegree and page transition. This construction respects identities and composition.

## Facts & Assumptions

[F1] [[def-exact-couple]] defines bidegree-zero pairs $(u,v)$ commuting with $i,j,k$. [[def-derived-exact-couple]] gives $D'=\operatorname{im}i$, $E'=H(E,jk)$ and the formulas $i'(a)=ia$, $j'(ix)=[jx]$, $k'[e]=ke$.

[F2] [[thm-an-exact-couple-generates-a-spectral-sequence]] iterates this derivation with its specified homology transitions.

[F3] [[def-morphism-of-spectral-sequences]] requires differential and homology-transition commutation.

[F4] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] permits local epic lifts, image restrictions and unique quotient descent.

## Proof

**Given:** A map $(u,v):(D,E,i,j,k)\to(\widetilde D,\widetilde E,\widetilde i,\widetilde j,\widetilde k)$ of page-$r$ exact couples. Tildes denote the target structure throughout.

1.1 Since $ui=\widetilde i u$, the component of $u$ at $(p,q)$ sends $D'_{p,q}=\operatorname{im}i_{p-1,q+1}$ into $\widetilde D'_{p,q}$, giving a restriction $u'$. Also $vjk=\widetilde j u k=\widetilde j\widetilde k v$, so $v$ commutes with the page differential, sends cycles to cycles and boundaries to boundaries, and induces $v':E'_{p,q}\to\widetilde E'_{p,q}$. Both maps preserve the bidegree. [F1, F4]

2.1 For $a\in D'_{p,q}$, the equality $u' i'a=u(ia)=\widetilde i(ua)=\widetilde i'u'a$ proves the derived $i$ square. Locally write $a=i x$, where $x$ has bidegree $(p-1,q+1)$. Then $v'j'a=[vjx]=[\widetilde jux]=\widetilde j'(\widetilde iux)=\widetilde j'u'a$, at bidegree $(p-r,q+r)$. The formula is independent of the local lift by the already defined derived maps, and equality descends by epic cancellation. For a cycle $e\in E_{p,q}$, $u'k'[e]=uke=\widetilde kve=\widetilde k'v'[e]$, with target $\widetilde D'_{p-1,q}$. Quotient descent proves this last equality on all of $E'$. These are every derived-couple commutation square with its required degrees. [F1, F4, step 1.1]

3.1 Repeat steps 1.1–2.1 at each derived couple. On its $E$ terms the next map is precisely the map induced on homology by the current $v$ map. Thus the maps commute with every differential and with each transition in [F2], as required by [F3]. Image restrictions of identity maps are identities; quotient maps induced by identities are identities. Restrictions and quotient descents of a composite agree with composites of the restrictions and descents by their uniqueness. This proves identity and composition compatibility at every finite stage. Zero images, zero homology quotients and the initial $r=1$ case all use the same formulas; the latter sends the derived $j$ to degree $(-1,1)$ as required. No global lifts or AC are used. [F2, F3, F4, step 1.1, step 2.1] ∎


## Remarks

The three squares below display the derived-couple compatibility proved in step 2.1. Nodes denote indexed families, not direct sums: the horizontal maps have bidegrees $(1,-1)$, $(-r,r)$ and $(-1,0)$, respectively, while all vertical maps have bidegree $(0,0)$. Thus each square is read componentwise with the indicated shift in its right-hand column.

\end{tikzcd}
```tikzcd
\begin{tikzcd}[scale=1.7, transform shape]
D' \arrow[r, "i'"] \arrow[d, "u'"'] & D' \arrow[d, "u'"] & D' \arrow[r, "j'"] \arrow[d, "u'"'] & E' \arrow[d, "v'"] & E' \arrow[r, "k'"] \arrow[d, "v'"'] & D' \arrow[d, "u'"] \\
\widetilde D' \arrow[r, "\widetilde i'"'] & \widetilde D' & \widetilde D' \arrow[r, "\widetilde j'"'] & \widetilde E' & \widetilde E' \arrow[r, "\widetilde k'"'] & \widetilde D'
\end{tikzcd}
```

At every page $s$, let $v_s:E^s\to\widetilde E^s$ be the induced map. Since it commutes with the differentials, its homology map fits into the transition square below, where the horizontal arrows are the specified homology-to-next-page isomorphisms. This is the repeated quotient descent in step 3.1; neither diagram replaces the proof.

\end{tikzcd}
```tikzcd
\begin{tikzcd}[scale=1.7, transform shape]
H(E^s,d^s) \arrow[r, "\alpha_s"] \arrow[d, "H(v_s)"'] & E^{s+1} \arrow[d, "v_{s+1}"] \\
H(\widetilde E^s,\widetilde d^s) \arrow[r, "\widetilde\alpha_s"'] & \widetilde E^{s+1}
\end{tikzcd}
```
