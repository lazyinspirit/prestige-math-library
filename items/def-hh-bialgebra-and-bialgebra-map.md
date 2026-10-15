---
id: def-hh-bialgebra-and-bialgebra-map
kind: definition
title: "Bialgebras and bialgebra maps"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, def-algebra-over-a-commutative-ring, thm-tensor-product-of-algebras-over-a-commutative-ring]
justified_by: [lem-hh-group-and-polynomial-hopf-algebras-exist]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed pp. 5–6: bialgebra definition and the natural algebra on a tensor product"
    - title: "Thomas Rüd, Hopf Algebras and rooted trees, Practical work in mathematics"
      url: "https://math.mit.edu/~rud/TeXthings/HopfAlgebras-1.1.pdf"
      locator: "§2.4, PDF p. 12 (printed p. 11): bialgebra definition and the equivalent compatibility conditions"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.1.3–2.2.2, PDF pp. 3–5: Hopf algebra data, finite-group function algebras and group algebras"

---
## Definition

Fix a field $k$. A **bialgebra over $k$** is a $k$-vector space $H$ with a unital associative $k$-algebra structure $(m,u)$ and a counital coassociative $k$-coalgebra structure $(\Delta,\varepsilon)$ in the sense of [[def-hh-coalgebra-and-coalgebra-map]], where $m:H\otimes H\to H$, $u:k\to H$, $\Delta:H\to H\otimes H$, and $\varepsilon:H\to k$. Explicitly, the algebra equations are $m(m\otimes\mathrm{id})=m(\mathrm{id}\otimes m)$ and $m(u\otimes\mathrm{id})=\mathrm{id}=m(\mathrm{id}\otimes u)$ under the canonical identifications; the coalgebra equations are those of [[def-hh-coalgebra-and-coalgebra-map]].

Require $\Delta:H\to H\otimes H$ and $\varepsilon:H\to k$ to be unital algebra homomorphisms. The algebra on $H\otimes H$ is the one with $(a\otimes b)(c\otimes d)=ac\otimes bd$ and unit $1_H\otimes1_H$; the algebra on $k$ is its field algebra. A **bialgebra map** $f:H\to K$ is a $k$-linear map preserving multiplication, unit, comultiplication, and counit: $f m_H=m_K(f\otimes f)$, $fu_H=u_K$, $\Delta_Kf=(f\otimes f)\Delta_H$, and $\varepsilon_Kf=\varepsilon_H$.

