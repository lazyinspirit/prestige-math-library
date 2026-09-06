---
id: def-incompressibility-method
kind: definition
title: "The incompressibility method"
status: draft
origin: session
deps: [lem-most-strings-are-incompressible, def-conditional-kolmogorov-complexity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §§15,17"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Definition
The **incompressibility method** first fixes an effective injective encoding of
a finite family $E$ by binary strings (often all of one length). Since fewer
than $2^t$ outputs can have descriptions of length below $t$, if
$|E|\ge2^t$ one may choose an encoded object whose description has length at
least $t$; [[lem-most-strings-are-incompressible]] is the fixed-length form of
this count. One then derives structure from the impossibility of a shorter
description. Conditional variants keep the auxiliary data and encoding fixed
and choose large $C(x\mid y)$ using
[[def-conditional-kolmogorov-complexity]].
