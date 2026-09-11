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
