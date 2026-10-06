---
id: lem-relative-handle-complex-torsion-agrees-with-the-inclusion
kind: lemma
title: "The torsion of the handle complex is the torsion of the inclusion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "thm-composition-and-sum-formulas-for-whitehead-torsion", "def-finite-based-free-chain-complex-and-its-contraction-torsion", "lem-contraction-torsion-is-independent-of-the-contracting-homotopy", "def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence", "def-simple-homotopy-equivalence", "thm-simple-homotopy-equivalences-have-zero-whitehead-torsion", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.2, equations (2.12)--(2.14) and §2.3, printed pp. 30--33"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Definition 8.18 and Proposition 8.19, printed p. 178; PDF page 186"
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected compact smooth cobordism whose inclusion
$\iota:M_0\hookrightarrow W$ is a homotopy equivalence, and equip $(W,M_0)$
with the relative CW structure induced by a finite handle decomposition. Put
$\pi=\pi_1(M_0)$ and identify $\pi_1(W)$ with $\pi$ along $\iota_*$. Then the
contraction torsion of the based handle complex $C^{\mathrm h}_*(W,M_0)$ is
defined and satisfies
$$\tau\bigl(C^{\mathrm h}_*(W,M_0)\bigr)=\tau(\iota)\in\operatorname{Wh}(\pi),$$
where $\tau(\iota)$ is AT-22's Whitehead torsion of the inclusion computed with
the induced CW structures. In particular, for a presentation with handles only
in two adjacent degrees $q,q+1$, with differential
$d_{q+1}:C_{q+1}\to C_q$ given by the intersection matrix $A$ over
$\mathbb Z[\pi]$, the contraction torsion is $(-1)^q[A]$ in AT-22's parity
convention for a two-term complex with differential in degree $q+1$, so $(-1)^q[A]$, rather than an unsigned matrix class, is the topological torsion of the inclusion.

## Facts & Assumptions

**Given:** A compact smooth cobordism $(W;M_0,M_1)$ whose inclusion $\iota:M_0\hookrightarrow W$ is a homotopy equivalence, with a finite handle decomposition and the induced relative CW structure on $(W,M_0)$.

[F1] The pairs clause of AT-22's composition and sum theorem: for a cellular map of finite CW pairs $f:(X,A)\to(Y,B)$ whose restrictions $f_X$ and $f_A$ are homotopy equivalences and whose basepoints are compatible, one has $\tau(f_X)=j_*\tau(f_A)+\tau(f_{\mathrm{rel}})$ in $\mathrm{Wh}(\pi_1(Y))$, where $f_{\mathrm{rel}}$ is the induced map of relative based cellular complexes and $\tau(f_{\mathrm{rel}})$ is the contraction torsion of its algebraic mapping cone; the formula also supplies the contractibility of that cone ([[thm-composition-and-sum-formulas-for-whitehead-torsion]], [[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F2] The based handle complex of $(W,M_0)$ is the based relative cellular complex of the relative CW pair induced by the handle decomposition, with one basis vector per handle; for a presentation with handles only in two adjacent degrees $q,q+1$ it is the two-term complex $0\to C_{q+1}\xrightarrow{A}C_q\to0$ with matrix $A$ the intersection matrix, and the contraction torsion of a two-term complex with differential in degree $q+1$ is $(-1)^q[A]$ ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]], [[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]]).

## Proof

1.1 Apply the pairs clause of [F1] to the cellular map of pairs $f=(\iota,\mathrm{id}_{M_0}):(M_0,M_0)\to(W,M_0)$: both restrictions are homotopy equivalences, the first by hypothesis and the second as an identity, so $\tau(\iota)=j_*\tau(\mathrm{id}_{M_0})+\tau(f_{\mathrm{rel}})$ where $f_{\mathrm{rel}}$ is the induced map of relative based cellular complexes. [F1, given]

2.1 The source relative complex of the pair $(M_0,M_0)$ is the zero complex, so $f_{\mathrm{rel}}$ is the zero map from the zero complex into the based handle complex $C^{\mathrm h}_*(W,M_0)$; its algebraic mapping cone is therefore $C^{\mathrm h}_*(W,M_0)$ itself. By [F1] the cone is contractible and $\tau(f_{\mathrm{rel}})$ is its contraction torsion, so the contraction torsion of $C^{\mathrm h}_*(W,M_0)$ is defined and, by [F2], independent of the chosen contraction. [F1, F2, step 1.1]

2.2 The first summand vanishes: the identity of $M_0$ is simple, exhibited by the empty sequence of elementary operations ([[def-simple-homotopy-equivalence]]), so its Whitehead torsion vanishes by [[thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]]; since $j_*$ is a homomorphism this gives $\tau(\iota)=\tau(f_{\mathrm{rel}})=\tau(C^{\mathrm h}_*(W,M_0))$. [F1, step 1.1]

3.1 For a presentation with handles only in degrees $q,q+1$, [F2] identifies the complex with $0\to C_{q+1}\xrightarrow{A}C_q\to0$. The contraction supplied by step 2.1 satisfies $As_q=\mathrm{id}_{C_q}$ and $s_qA=\mathrm{id}_{C_{q+1}}$, so $A$ is invertible and $s_q=A^{-1}$. Thus the odd-to-even map $d+s$ has matrix $A$ when $q$ is even and $A^{-1}$ when $q$ is odd, giving $\tau(C^{\mathrm h}_*(W,M_0))=(-1)^q[A]$. Step 2.2 identifies this class with $\tau(\iota)$. [F2, step 2.1, step 2.2] ∎
