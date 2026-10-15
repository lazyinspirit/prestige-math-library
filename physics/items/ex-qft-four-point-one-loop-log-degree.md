---
id: ex-qft-four-point-one-loop-log-degree
kind: example
title: A four-point quartic one-loop graph has logarithmic superficial degree
status: published
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - prop-qft-four-dimensional-log-scale-anomaly
  - prop-qft-quartic-superficial-degree
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  prop-qft-four-dimensional-log-scale-anomaly: mathematical-premise
  prop-qft-quartic-superficial-degree: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alexander M. Polyakov's QFT I course material, reconstructed and expanded by QFT.org, lesson 39: One-Loop Divergences and Power Counting"
      url: "https://qft.org/courses/qft-i/39-one-loop-divergences-and-power-counting/"
    - title: "Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, §§12 and 18"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
dependency_level: 5
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

In Euclidean momentum dimension $D=4$, take the connected graph with two quartic vertices joined by two internal edges and with two external half-edges at each vertex. Its counts are $V=2$, $I=2$, $E=4$, and $L=1$. Its superficial degree is therefore zero, so it has logarithmic **superficial** degree under the stated power-counting convention.

Separately, on punctured Euclidean $\mathbb R^4$ let $C_0(x)=1/(4\pi^2|x|^2)$ and $u=C_0^2=1/(16\pi^4|x|^4)$. For any $\chi\in\mathcal D(\mathbb R^4)$ equal to one near $0$, and every $\mu>0$, define $T_\mu(\varphi)=\int_{\mathbb R^4\setminus\{0\}}[\varphi(x)-\chi(\mu x)\varphi(0)]/(16\pi^4|x|^4)\,d^4x$ for $\varphi\in\mathcal D(\mathbb R^4)$. Conditional on the current QFT-IR04 proposition [[prop-qft-four-dimensional-log-scale-anomaly]] with its explicit Axiom-of-Choice hypothesis, this family has the exact logarithmic scale-change identity stated below and no same-degree homogeneous extension. This is a separate Euclidean distribution-extension calculation; it is not identified with the integrated amplitude of the graph. The graph count alone does not establish convergence or divergence of an actual loop integral.

## Facts & Assumptions

**Given:** The graph described above, the Euclidean dimension $D=4$, and the Axiom of Choice for the separate distribution-extension calculation.

[F1] [[prop-qft-quartic-superficial-degree]]: for a finite connected quartic graph, $\omega_D=D+(D-4)V-(D-2)E/2$; in $D=4$ this is $4-E$, and zero is logarithmic superficial degree only.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; assume AC as required by the separate scale-anomaly supplier.

[L1] [[prop-qft-four-dimensional-log-scale-anomaly]]: under AC, for $u(x)=1/(16\pi^4|x|^4)=C_0(x)^2$ on punctured Euclidean $\mathbb R^4$ and any smooth compactly supported $\chi=1$ near $0$, the displayed $T_\mu$ extends $u$, has scaling degree $4$, and $T_\mu-T_\nu=(8\pi^2)^{-1}\log(\mu/\nu)\delta_0$; no same-degree extension is exactly homogeneous. The current supplier carrier is draft and has not received independent acceptance, so this result is used conditionally at its actual statement and proof status.

## Verification

**Given:** [F1], the Axiom of Choice [A1], and the exact conditional supplier statement [L1].

1.1 Each of the two vertices has two incidences from the internal edges and two external half-edges, so it has four slots. Thus the graph is in the finite connected quartic class, with $V=2$, $I=2$, and $E=4$. Its loop count is $L=I-V+1=1$. [given, algebra]

2.1 Apply [F1]: $\omega_4=4-E=4-4=0$, equivalently $4L-2I=4-4=0$. By the stated convention this is logarithmic superficial degree; it supplies no conclusion about convergence or divergence of a graph integral. [F1, step 1.1, algebra]

3.1 The kernel and cutoff in the separate calculation are exactly those in [L1], and [A1] supplies its stated AC hypothesis. Instantiating [L1] gives $T_\mu-T_\nu=(8\pi^2)^{-1}\log(\mu/\nu)\delta_0$ for all $\mu,\nu>0$ and excludes a same-degree homogeneous extension, conditional on that draft supplier. At the boundary $\mu=\nu$, both sides of the scale-change identity are zero. No step identifies this distributional extension with the graph's amplitude. [A1, L1, given] ∎
