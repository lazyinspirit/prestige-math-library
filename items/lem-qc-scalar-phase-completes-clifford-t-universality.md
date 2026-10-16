---
id: lem-qc-scalar-phase-completes-clifford-t-universality
kind: lemma
title: An explicit scalar phase completes Clifford+T to full unitary density
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-qc-clifford-t-projective-density
  - lem-qc-irrational-rotation-dense-on-circle
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-code-deviation-and-spread
  - def-qc-finite-channel-location-schedule
  - def-operator-norm
  - lem-operator-norm-is-a-norm
dependency_level: 9
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: "https://arxiv.org/pdf/quant-ph/0505030"
    - title: "John Preskill, Fault-tolerant recovery and fault-tolerant gates (2011 lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

Let $P=e^{2\pi i\sqrt2}I_2$, and use the exact matrices $H,T$ of [[def-qc-one-qubit-gate-alphabet-and-rotations]]. The inverse-closed alphabet $\{H,T,T^*,P,P^*\}$ generates a subgroup dense in $U(2)$ in operator norm, including scalar phases.

For any encoding isometry $V:\mathbb C^2\to(\mathbb C^2)^{\otimes m}$, $m\ge1$, the logical matrices $P,P^*$ have the following depth-one gadgets: apply the corresponding scalar matrix on coordinate one and the identity on every other coordinate. Count exactly $m$ scheduled locations, one on each coordinate, including the $m-1$ idles. Each gadget has literal spread one. A joint input with $s$ supported errors per live block and at most $q$ faulty elementary locations per block has joint $(s+q)$-deviation at its output, with any finite external reference retained. These phase and idle gadgets are closed under recursive replacement: the phase operation is applied to the first child only, and all other children are idle. This supplies a phase gadget and its error budget, not the noisy correction or non-Clifford gadget contracts of a full proper code.

## Facts & Assumptions

**Given:** The exact alphabet, a fixed finite encoding isometry, the specified phase/idle schedules and arbitrary CPTP replacements supported on the faulty locations.

[F1] [[lem-qc-clifford-t-projective-density]]: the classes of $H,T$ generate a dense subgroup of $PU(2)=U(2)/\{\lambda I:|\lambda|=1\}$ with the quotient topology.

[F2] [[lem-qc-irrational-rotation-dense-on-circle]]: for irrational $\alpha$, the integer powers of $e^{2\pi i\alpha}$ are dense in the unit circle.

[F3] [[def-operator-norm]] defines the operator norm as the supremum on the unit ball.

[F4] [[def-qc-code-deviation-and-spread]]: joint $s$-deviation uses one CPTP error map with Kraus operators in the span of tensor operators of support at most $s$ per block, and identity on the external reference.

[F5] [[def-qc-finite-channel-location-schedule]] counts each supplied ideal channel or faulty local replacement at its declared support; unlisted idles are not implicit.

[F6] [[lem-operator-norm-is-a-norm]] supplies operator-norm homogeneity and the triangle inequality.

## Proof


1.1 The number $\sqrt2$ is irrational. Otherwise write $\sqrt2=a/b$ with positive coprime integers $a,b$. Then $a^2=2b^2$ makes $a$ even, so $a=2c$ and $b^2=2c^2$ makes $b$ even, contradicting coprimality. Thus [F2] applies to the scalar phases $e^{2\pi i n\sqrt2}$. [given, F2, algebra]

1.2 The gadget matrix is $(e^{\pm2\pi i\sqrt2}I_2)\otimes I_{2^{m-1}}=e^{\pm2\pi i\sqrt2}I_{2^m}$. Consequently it intertwines $V$ with $P$ or $P^*$ exactly, including the scalar phase. Its channel is the identity on the whole physical operator space, also with an external reference. The schedule has one supplied gate or idle on each of the $m$ distinct coordinates, so [F5] gives size $m$ and depth one. Its literal unitary propagation changes no operator support. [given, F3, F5, algebra]

2.1 Fix $U\in U(2)$ and $\varepsilon>0$. Write $\pi:U(2)\to PU(2)$ for the quotient. The set $\pi(B(U,\varepsilon/2))$ is open, because its inverse image is $\bigcup_{|\lambda|=1}\lambda B(U,\varepsilon/2)$, a union of open operator-norm balls. By [F1], some matrix word $W$ in $H,T$ and their adjoints has projective class in that open set, so $\|U-\lambda W\|_{\mathrm{op}}<\varepsilon/2$ for some $|\lambda|=1$. By step 1.1 and [F2], choose an integer $n$ with $|e^{2\pi in\sqrt2}-\lambda|<\varepsilon/2$. Since $W$ is unitary, [F3] gives $\|W\|_{\mathrm{op}}=1$ and homogeneity and the triangle inequality from [F6] yield $\|U-P^nW\|_{\mathrm{op}}<\varepsilon$. This proves density in the full matrix group $U(2)$. [F1, F2, F3, F6, step 1.1, algebra, choose]

2.2 A union of at most $q$ faulty locations in this layer touches at most $q$ coordinates per block. Expand the incoming Kraus operators from [F4] as finite sums of per-block supported terms. Each product of a fault Kraus operator and such a term has per-block support in the union of their supports, of cardinality at most $s+q$. The ideal scalar gates commute with all of them. Their composite is CPTP and hence is a joint error channel of the type in [F4]; it need not factor across blocks. This proves joint $(s+q)$-deviation and the spread-one fault budget with the external reference unchanged. In particular, $s=q=1$ gives the computation-stage budget two needed when the declared capacity is two. [given, F4, step 1.2, algebra]

3.1 Replace a phase location by the same phase on its first child and idle locations on its other $m-1$ children; replace an idle by $m$ idles. At each replacement exactly one descendant carries the phase, so the full matrix after any number of replacements remains $e^{\pm2\pi i\sqrt2}I$. Every elementary operation used is again $P,P^*$ or an idle. Thus this part of the finite alphabet is closed under recursive replacement, with at most $m$ children per phase or idle gadget and the exact level-one size and depth already proved. No controlled phase is identified with an identity gate: the claim concerns the displayed scalar matrices themselves, while their unconditioned channels are identity. [given, step 1.2, step 2.2, induction, algebra] ∎

## Remarks

Clifford+T alone has only finitely many determinant values, so its projective density does not imply full $U(2)$ density. The explicit scalar generator above supplies the missing phases. It does not establish a verified $T$-state factory, noisy recovery, or a complete universal fault-tolerant gadget family.
