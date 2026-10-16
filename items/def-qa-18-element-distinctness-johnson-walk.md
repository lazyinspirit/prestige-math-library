---
id: def-qa-18-element-distinctness-johnson-walk
kind: definition
title: "Element-distinctness Johnson walk and value access"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-18-marked-set-and-stationary-mass
  - def-qc-coherent-function-oracle
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §§2–4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §§20.1–20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

Let $N\ge2$, let $\mathcal V$ be a finite nonempty value set, and let $f:[N]\to\mathcal V$, where $[N]=\{1,\ldots,N\}$. A **coherent value oracle** is a supplied finite unitary $O_f$ with an explicitly specified injective encoding $\operatorname{enc}:\mathcal V\to\{0,1\}^b$ for some finite $b$, and action $|i,z\rangle\mapsto|i,z\mathbin\oplus\operatorname{enc}(f(i))\rangle$ on valid addresses and target strings, as in [[def-qc-coherent-function-oracle]]. Injectivity ensures that stored encodings compare equal exactly when the underlying values do. Oracle-query cost and ordinary gate-occurrence cost are separate coordinates under [[def-qc-elementary-circuit-resources]]. The function table or name alone supplies no oracle circuit.

For $N\ge4$ and $2\le r\le\lfloor N/2\rfloor$, the **lazy Johnson walk** has state space $\Omega_r=\{S\subseteq[N]:|S|=r\}$ and transitions

$$P(S,S)=\tfrac12,\qquad P(S,S\setminus\{i\}\cup\{j\})=\frac{1}{2r(N-r)}\quad(i\in S,\ j\notin S),$$

with all other entries zero. Its marked vertices are

$$\mathcal M_f:=\{S\in\Omega_r:\exists i,j\in S,\ i\ne j,\ f(i)=f(j)\}.$$

The stored data at $S$ are the $r$ labeled values $(f(i))_{i\in S}$. Preparing the uniform $r$-subset state and loading these values has value-query cost $S_0=r$, with subset preparation gates charged separately. A neighbor update erases the removed value and loads the added value, so its value-query cost is $U_0=2$; the XOR oracle is its own inverse. Checking whether the stored subset is marked uses no further value queries, so $C_0=0$, but comparison gates and memory accesses are charged. After measuring a marked subset, scanning its stored values outputs a colliding pair with no additional value query; the scan's gate/time cost remains separate. For $N\le3$, use direct pairwise comparison rather than the $r$-subset walk. The lower bound $r\ge2$ is essential: a one-element subset cannot contain a collision pair.
