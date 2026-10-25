---
id: def-regular-weyl-system-on-a-symplectic-vector-space
kind: definition
title: Regular Weyl systems and irreducibility
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-symplectic-vector-space, def-heisenberg-group-of-a-symplectic-vector-space, def-hilbert-space, def-strongly-continuous-unitary-representation]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---

## Definition

Fix a finite-dimensional real symplectic vector space $(V,\omega)$ and a real
parameter $\lambda$. A **Weyl system with parameter $\lambda$** on a nonzero
complex Hilbert space $\mathcal H$ is a map $W:V\to U(\mathcal H)$ such that
$$W(0)=I,\qquad W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)\quad(v,w\in V).$$
It is **regular** when, for every $v\in V$, the map
$t\mapsto W(tv)$ is strongly continuous on $\mathbb R$. It is
**irreducible** when the only closed subspaces invariant under every $W(v)$ are
$\{0\}$ and $\mathcal H$, as in
[[def-strongly-continuous-unitary-representation]].

Each $W(v)$ is unitary. Substituting $w=-v$ in the relation gives
$W(v)W(-v)=I$, because $\omega(v,-v)=0$; hence
$W(v)^*=W(-v)$. The scalar $\lambda$ is the central character parameter:
the associated representation of [[def-heisenberg-group-of-a-symplectic-vector-space]]
acts on $(0,t)$ by $e^{i\lambda t}I$.
