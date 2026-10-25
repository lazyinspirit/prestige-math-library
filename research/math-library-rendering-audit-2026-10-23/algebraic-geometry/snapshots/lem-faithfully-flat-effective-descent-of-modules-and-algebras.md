---
id: lem-faithfully-flat-effective-descent-of-modules-and-algebras
kind: lemma
title: "Faithfully flat descent of modules and algebras is effective"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-faithfully-flat-ring-map-characterisations
  - thm-associativity-of-balanced-tensor-products
  - thm-affine-scheme-ring-anti-equivalence
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-faithfully-flat-effective-descent-of-modules-and-algebras and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-30; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"64e13b69e6c182938fe056be9dcd2a66ec39a18d3602732f04026c8c160602e3","evidence":["research/frontier-38-owner-30-reader-30.md","research/frontier-38-owner-30-reader-findings-30.json","research/frontier-38-owner-30-dispatch/reader-reader-30.result.json","research/frontier-38-owner-30-step5-hash-30-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-faithfully-flat-effective-descent-of-modules-and-algebras.md","historical_raw_sha256":"5845a2502545ba929ea5a877f00c14e15babe062f6cbc1d5f980885c2c0f9088","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:36:51.819Z"}}
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé VIII §§1–2; Exposé V §§3–5"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Descent §§4–7 and Fundamental Groups §§3, 5–6"
      url: https://stacks.math.columbia.edu/download/descent.pdf
---

## Statement

Let $A\to B$ be a faithfully flat homomorphism. A descent datum on a $B$-module $N$ is a $B\otimes_A B$-linear isomorphism between its two pullbacks, written as transport from the first copy to the second, satisfying $\theta_{23}\theta_{12}=\theta_{13}$ over $B\otimes_A B\otimes_A B$. Such data form a category equivalent, by base change, to $A$-modules. The same holds for commutative unital algebras. If $N$ is an algebra and the transport is an algebra isomorphism, its descended algebra is
$$D=\{n\in N:\theta(n\otimes1)=1\otimes n\},$$
with the two tensor expressions interpreted in the respective pullbacks. The natural map $B\otimes_A D\to N$ is an isomorphism compatible with the datum. No finiteness or Noetherian hypothesis is required.

## Facts & Assumptions

**Given:** A faithfully flat ring map $A\to B$, a $B$-module $N$ and the descent isomorphism $\theta$ in the Statement.

[F1] Tensoring with a faithfully flat algebra preserves exact sequences and reflects zero modules, hence reflects isomorphisms ([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[thm-faithfully-flat-ring-map-characterisations]]).

[F2] The associativity isomorphism for tensor products identifies iterated pullbacks ([[thm-associativity-of-balanced-tensor-products]]); affine schemes and rings are contravariantly equivalent ([[thm-affine-scheme-ring-anti-equivalence]]).

## Proof

1.1 First consider a cover $g:T\to S$ with a section $s:S\to T$ and a module $N$ on $T$ with the given transport. Put $M=s^*N$. Pull back $\theta$ along $T\to T\times_ST$, $t\mapsto(s(g(t)),t)$. This gives an isomorphism $g^*M\to N$. Its compatibility with the original datum follows by pulling the cocycle identity back along $(s(g(t_1)),t_1,t_2)$ on $T\times_ST$. Pulling the cocycle back to the diagonal shows that diagonal transport is an invertible idempotent and hence the identity. Pulling back along $(t,s(g(t)),t)$ then shows that reverse transport is the inverse. These identities prove both effectiveness and that a map between descended objects is determined uniquely by its pullback: its descent-compatible upstairs map is recovered by pulling back along the section. This argument applies to affine modules, and to algebras when the transports preserve multiplication and unit. [F2, construct]

2.1 Define $M$ to be the equalizer inside $N$ displayed in the Statement, considered as an $A$-module. Flat tensor product preserves this equalizer. For any flat base extension $A\to A'$, the invariant module for the base-changed datum is therefore $A'\otimes_A M$, since it is the kernel of the base-changed difference of the two transport maps. Take $A'=B$. The new covering ring is $B\to B\otimes_A B$ and has a retraction given by multiplication; equivalently its affine covering has a section. By step 1.1 the base-changed datum is effective. For an effective datum coming from a module $Q$, the invariant equalizer is $Q$: for a split cover, apply the section to an invariant element to recover its unique downstairs element. Thus the base change of $B\otimes_A M\to N$ is an isomorphism. Faithful flatness in [F1] proves that the original map is an isomorphism. [F1, F2, step 1.1, algebra]

3.1 For completeness, the invariant equalizer of the canonical datum on $B\otimes_A Q$ is $Q$ also before this split base change. Indeed $Q\to B\otimes_A Q\rightrightarrows B\otimes_A B\otimes_A Q$ becomes a split exact equalizer after tensoring with $B$: multiplication supplies the section and step 1.1 applies. Its kernel and cokernel are detected by [F1]. Consequently a descent-compatible map $N\to N'$ takes invariants to invariants, and the isomorphisms of step 2.1 identify it uniquely with the base change of that restricted $A$-linear map. This proves full faithfulness as well as effectiveness. [F1, step 1.1, step 2.1]

4.1 If $N$ is an algebra, its invariant subset is closed under sums, products, scalar multiplication and the unit because $\theta$ is an algebra isomorphism. It is therefore an $A$-algebra. The map of step 2.1 is an algebra homomorphism and an isomorphism of modules, hence an algebra isomorphism. Restriction to invariants preserves algebra maps and step 3.1 proves their full faithfulness. This proves both equivalences and the displayed construction. [step 2.1, step 3.1, algebra] ∎
