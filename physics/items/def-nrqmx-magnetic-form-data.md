---
id: def-nrqmx-magnetic-form-data
kind: definition
domain: mathematics
library: physics
title: Magnetic quadratic-form data
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-nrqm-magnetic-and-detection-position-and-momentum-operators
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-countable-choice
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.1.1, magnetic Hamiltonian and gauge conventions"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §§11.3 and 13.1–13.2, Pauli and magnetic Hamiltonian conventions"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
---

## Definition

Assume Countable Choice and let $d\ge1$ be an integer. Work in
$H=L^2(\mathbb R^d;\mathbb C)$ with
$\langle u,v\rangle=\int_{\mathbb R^d}u\overline v$, linear in the first
variable, using the quotient and complex-function conventions of the linked
Euclidean $L^2$ definitions. Fix real scalars $m>0$, $\hbar>0$, and $q$.
Let $A=(A_1,\ldots,A_d)\in C^\infty(\mathbb R^d;\mathbb R^d)$ be real and
let $V\in L^1_{\mathrm{loc}}(\mathbb R^d;\mathbb R)$ satisfy
$V\ge-v_0$ almost everywhere for some finite $v_0\ge0$. Put
$\mathscr D=C_c^\infty(\mathbb R^d;\mathbb C)$ and, for $u\in\mathscr D$,
define
$$\Pi_j^A u=-i\hbar\,\partial_j u-qA_j u\qquad (1\le j\le d).$$
For $u,v\in\mathscr D$ define the sesquilinear form
$$q_{A,V}(u,v)=\frac1{2m}\sum_{j=1}^d\langle\Pi_j^A u,\Pi_j^A v\rangle+\int_{\mathbb R^d}V(x)u(x)\overline{v(x)}\,dx,$$
and write $q_{A,V}[u]=q_{A,V}(u,u)$. Each integral is finite: the test
functions and their magnetic derivatives are bounded with compact support,
and $V$ is integrable on compact sets. The form is Hermitian, densely
defined, and bounded below by $-v_0\|u\|_2^2$.

For $\varepsilon_0>0$ define its shifted form norm by
$$\|u\|_{q,v_0,\varepsilon_0}^2=q_{A,V}[u]+(v_0+\varepsilon_0)\|u\|_2^2.$$
The form is **closable** when every sequence $(u_n)\subset\mathscr D$ with
$\|u_n\|_2\to0$ and
$\|u_n-u_m\|_{q,v_0,\varepsilon_0}\to0$ as $n,m\to\infty$ also satisfies
$\|u_n\|_{q,v_0,\varepsilon_0}\to0$. This condition is independent of the
choice of $\varepsilon_0>0$. When it holds, the **closed form closure** is the
completion of $\mathscr D$ in this norm, identified with its $L^2$ limits;
the corresponding closed form is denoted $\overline q_{A,V}$.

## Definition references

[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]

[[def-complex-lp-and-euclidean-test-function-conventions]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[def-countable-choice]]
