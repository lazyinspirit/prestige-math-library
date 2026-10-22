---
id: ex-gr-fx14-2
kind: example
title: Holonomy and discrete geometric interfaces — triangular graph Wilson trace
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-discrete-holonomy-model
  - prop-gr-fx-discrete-wilson-trace
  - prop-gr-fx-su2-compact
dependency_roles:
  def-gr-fx-discrete-holonomy-model: mathematical-premise
  prop-gr-fx-discrete-wilson-trace: mathematical-premise
  prop-gr-fx-su2-compact: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, triangular loops, vertex gauge transformations, and invariant traces."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §§2–3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "The defining unitary matrix representation and its trace."
verification:
  precheck: pass
---

## Statement

Take the oriented triangle $v_0\xrightarrow{e_1}v_1\xrightarrow{e_2}v_2\xrightarrow{e_3}v_0$, assign $g_{e_1}=g_{e_2}=g_{e_3}=I_2$, and use the defining representation $\rho:SU(2)\to U(\mathbb C^2)$ given by $\rho(g)v:=gv$ for column vectors $v\in\mathbb C^2$. Let $k=\operatorname{diag}(i,-i)\in SU(2)$ and take the vertex gauge assignment $h_{v_0}=k$, $h_{v_1}=h_{v_2}=I_2$. The first and third edge matrices change to $k^{-1}$ and $k$, respectively, while the loop product remains $I_2$ and its Wilson trace remains $2$.

## Statement references

[[def-gr-fx-discrete-holonomy-model]]

[[prop-gr-fx-discrete-wilson-trace]]

[[prop-gr-fx-su2-compact]]

## Facts & Assumptions

**Given:** The directed triangle, identity edge assignment, defining representation, and vertex gauge rule of the finite graph model.

[F1] [[def-gr-fx-discrete-holonomy-model]]: $g'_e=h_{t(e)}g_eh_{s(e)}^{-1}$ and the loop product is later-left ordered.

[F2] [[prop-gr-fx-discrete-wilson-trace]]: closed-loop Wilson traces are invariant under every vertex gauge assignment.

[F3] [[prop-gr-fx-su2-compact]]: the matrices in $SU(2)$ form a group under matrix multiplication.

## Proof

**Proof technique:** direct verification.

1.1 The matrix $k$ is unitary and has determinant $i(-i)=1$, so $k\in SU(2)$; also $k\ne I_2$ and $k^{-1}\ne I_2$. By [F1], $g'_{e_1}=I_2I_2k^{-1}=k^{-1}$, $g'_{e_2}=I_2$, and $g'_{e_3}=kI_2I_2=k$. Thus individual edge matrices change. [given, F1, F3, algebra]

2.1 Their later-left loop product is $g'_{e_3}g'_{e_2}g'_{e_1}=kI_2k^{-1}=I_2$, whose defining-representation trace is $2$. The original product is also $I_2$ and has trace $2$; this concrete calculation agrees with [F2]. [step 1.1, F1, F2, F3, algebra] ∎

## Remarks

The directed graph and gauge action are depicted below. The arrows set the multiplication order; the displayed verification is the proof of the trace identity.

```tikzcd
v_0 \arrow[r,"e_1"] & v_1 \arrow[dl,"e_2"] \\
v_2 \arrow[u,"e_3"] &
```
