---
id: cex-mu-p-is-not-a-smooth-torus
kind: counterexample
title: "The multiplicative group scheme mu p is not a smooth torus"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for cex-mu-p-is-not-a-smooth-torus and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-25; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"27254c8200c61840065c8df323a82f502770d2bfd3335612849c582683f0f4b3","evidence":["research/frontier-38-owner-30-reader-25.md","research/frontier-38-owner-30-reader-findings-25.json","research/frontier-38-owner-30-dispatch/reader-reader-25.result.json","research/frontier-38-owner-30-step5-hash-25-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/cex-mu-p-is-not-a-smooth-torus.md","historical_raw_sha256":"7a793d54f69b6137cc1c93084ad6759eb0fefb92e1060f421827f590b1ac6711","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:26:26.494Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-axiom-of-choice", "lem-diagonalizable-character-antiequivalence", "thm-multiplicative-type-groups-and-galois-character-modules", "cor-tori-correspond-to-torsion-free-character-lattices", "def-smooth-morphism-schemes", "def-embedding-dimension-and-regular-local-ring"]
proof_strategy: direct
---

## Statement refuted

Every finite-type group of multiplicative type over a field is a smooth torus.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$ of characteristic $p>0$, and the group $G=\mu_p=\operatorname{Spec}k[t]/(t^p-1)$ with $\Delta(t)=t\otimes t$; the following facts are used.

[A1] Assume [[def-axiom-of-choice]] only through the general classification and torus criterion invoked below.

[F1] The diagonalizable character dictionary is [[lem-diagonalizable-character-antiequivalence]].

[F2] General multiplicative type classification is [[thm-multiplicative-type-groups-and-galois-character-modules]].

[F3] Tori require torsion-free character modules: [[cor-tori-correspond-to-torsion-free-character-lattices]].

[F4] Smoothness requires geometrically regular fibres: [[def-smooth-morphism-schemes]]. A Noetherian local ring is regular exactly when its dimension equals the dimension of its maximal ideal modulo its square over the residue field: [[def-embedding-dimension-and-regular-local-ring]].

## Counterexample

**Proof technique:** direct.

1.1 F1 gives $G=D_k(\mathbb Z/p\mathbb Z)$ and $X^*(G)=\mathbb Z/p\mathbb Z$ with trivial Galois action. Thus it is of multiplicative type by F2 and is not a torus by F3. Its algebra is $k[u]/(u^p)$ with $u=t-1$, so it has a nonzero nilpotent. For any field extension $K/k$, $G(K)=\{1\}$, although its coordinate ring has dimension $p$ over $k$. [A1, F1, F2, F3, algebra]

2.1 Its local ring $k[u]/(u^p)$ has only one prime ideal, $(u)$, so has Krull dimension zero. The quotient $(u)/(u^2)$ has dimension one over its residue field $k$, since $p\ge2$. Thus this Noetherian local ring is not regular by F4. Already over $k$ the fibre fails regularity, so it is not geometrically regular and $G\to\operatorname{Spec}k$ is not smooth by F4. Together with step 1.1, this refutes the statement. [F4, step 1.1, algebra] ∎
