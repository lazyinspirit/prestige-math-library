---
page: cyclotomic-murphy-bases-and-cellular-module-constructions
title: "Cyclotomic Murphy Bases and Cellular Module Constructions"
status: draft
items:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - lem-hh-cyclotomic-anti-involution-fixes-generators
  - def-hh-cyclotomic-murphy-elements
  - lem-hh-type-a-garnir-straightening-and-murphy-cell-law
  - lem-hh-componentwise-initial-row-straightening
  - lem-hh-cyclotomic-component-shift-and-dominance-ideals
  - thm-hh-cyclotomic-murphy-basis-and-cellularity
  - thm-hh-cell-modules-forms-and-radicals
  - thm-hh-cellular-simple-module-classification-over-a-field
examples: []
---

The cyclotomic Murphy elements are intended to give an integral cellular basis over the universal parameter ring, including singular specializations. The page fixes the multiplicative $Q$ normalization, the generator-fixing anti-involution, the multipartition dominance order, and the signed-conjugate convention used by the existing type-A Specht module page.

## Construction route

The page first defines a cellular datum and the cyclotomic Murphy elements. It supplies the anti-involution from the full affine and cyclotomic presentation. The ordinary type-A Garnir argument gives the finite Murphy basis and lexicographic law; componentwise straightening transfers that route to the initial component intervals. The adjacent component-shift identity handles $X_1$, from which the dominance ideals and full cyclotomic cell law are intended to follow. The integral basis then uses the Ariki–Koike PBW rank and the colored RSK count. Cell modules, their forms, radicals, and the simple module classification follow from the abstract cellular algebra arguments.

## Conventions and scope

For an $r$-multipartition $\lambda$, the row-filled initial tableau assigns consecutive labels component by component, then row by row. The Murphy generator $m_\lambda=u_\lambda x_\lambda$ uses the cyclotomic factor $u_\lambda=\prod_{c=2}^r\prod_{j\le a_c}(L_j-u_c)$ and the row symmetrizer $x_\lambda=\sum_{w\in S_\lambda}T_w$. The anti-involution fixes every $T_i$ and $X_j$; no square-root parameter rescaling is used in these cyclotomic definitions.

At level one, the row Murphy cell module is not identified with an untwisted same-label ordinary Specht module. The existing comparison is the signed-conjugate statement in [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]: ordinary Specht label $\lambda$ corresponds to the sign twist of the Murphy cell at $\lambda'$.

## Proof status

The abstract cell datum, cyclotomic anti-involution, Murphy element definitions, cell module/form theorem, and field classification have local proof drafts. The ordinary type-A Murphy basis and lexicographic cell law are also proved in the current draft. The planned upgrade from lexicographic support to dominance ideals still has an unresolved coefficient-elimination case in the ordinary type-A source route; the componentwise, component-shift, and full cellular-basis results therefore remain escalated. Their dependent claims are retained for reconciliation and are not presented as independently accepted results.

The companion [[cyclotomic-murphy-bases-and-cellular-module-constructions-examples]] checks the rank-one forms, a singular rank-two specialization, and the Specht label convention.
