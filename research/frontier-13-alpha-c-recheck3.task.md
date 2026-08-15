## Group C round 3 — batch 4, two items only (targeted)

Orders 399/400 and 365.001/365.002 are `ready-for-splice` and must not be
re-opened. Verify only the two items you blocked 395 on. Both are already
confirmed present on disk by the orchestrator:

```
ex-bounded-order-graph-classes-are-erdos-hajnal
  title: "Every hereditary graph class of bounded order has the
          Erdős–Hajnal property"

cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property
  deps now lead with def-erdos-hajnal-property-and-constant,
       def-h-free-and-family-free-graph
```

What is verified is that the strings changed. What you check is whether the
mathematics did:

1. Does the **hereditary** hypothesis actually discharge in the proof, or was the
   word added to the title while the argument still ranges over arbitrary
   bounded-order classes? If the proof needs the hereditary closure rather than
   hereditariness, the Statement must say so.
2. Do the corollary's two new definitional deps get **cited at the steps that use
   them** in the proof contract, or merely listed?
3. Counts unmoved at 14/8/25/8, gates green, no regression in the four items
   repaired last pass.

Verdict: `ready-for-splice` or `not-ready` for 395/396. Nothing else.
