---
id: lem-temperley-lieb-zero-loop-perfect-matching-standard-module-is-simple
kind: lemma
title: "The zero-loop perfect-matching standard module is simple"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - lem-temperley-lieb-critical-standard-modules-are-simple
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-module-action-is-well-defined
  - lem-temperley-lieb-link-state-gram-form-is-invariant
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, equations (3.13)–(3.15) and Proposition 3.5, then §4, Proposition 4.9, PDF pp. 15 and 21: renormalized form and the zero-loop perfect-matching case."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, Proposition 2.7, printed pp. 11–12: invariant cell forms and stability of their radicals; the exceptional Temperley–Lieb case is proved locally."
---

## Statement

Let $p\ge1$, $q\in\{i,-i\}$, $\delta=q+q^{-1}=0$, and $n=2p$. Then the right Temperley–Lieb standard module $W_{2p,0}(\mathbb C,0)$, whose basis consists of noncrossing perfect matchings of $2p$ sites, is simple. This conclusion concerns the actual module; its ordinary link-state form is identically zero and its zero form quotient is not used.

## Facts & Assumptions

**Given:** $p\ge1$, $q=\pm i$, $\delta=0$, the link-state modules and the stacking right action.

[F1] The link-state basis consists of noncrossing partial matchings with $p=(n-t)/2$ arcs and $t$ defects ([[def-temperley-lieb-link-state-standard-modules]]).

[F2] Stacking below a link state defines its right action by the corresponding Temperley–Lieb diagram ([[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F3] The capping form on basis states is $\delta^c$ when all defect paths propagate and zero otherwise ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F4] At a critical complex label the link-state capping form is nondegenerate ([[lem-temperley-lieb-critical-standard-modules-are-simple]]).

[F5] Criticality is $\kappa<\infty$ and $\kappa\mid(t+1)$, with $\kappa=\operatorname{ord}(q^2)$ ([[def-temperley-lieb-complex-critical-labels-and-reflection]]).

[F6] Temperley–Lieb diagrams are noncrossing matchings; stacking removes each closed component with factor $\delta$, and the composition is associative ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

## Proof

**Proof technique:** Replace the identically zero perfect-matching form by its first coefficient in the loop parameter, identify that pairing with a critical one-defect form, and construct operators that generate every basis state.

1.1 For a parameter variable $b$, let $\phi_b$ be the link-state form on the fixed basis of $W_{2p,0}(\mathbb C,b)$. If $a,c$ are perfect matchings, their overlay is a disjoint union of $C(a,c)\ge1$ alternating cycles, counting a shared arc as a two-edge cycle; therefore $\phi_b(a,c)=b^{C(a,c)}$. Define the bilinear form $\phi'(a,c)=\left.\frac{d}{db}\phi_b(a,c)\right|_{b=0}.$ It follows that $\phi'(a,c)=1$ when $C(a,c)=1$ and $0$ when $C(a,c)>1$. [F1, F3, given, construct]

2.1 Delete site $2p$ and its incident arc from a perfect matching, and declare its partner to be the single defect. This is a bijection from perfect matchings on $2p$ sites to the link-state basis of $W_{2p-1,1}$: the inverse joins the unique defect to the appended site $2p$. For a pair $a,c$, deleting the two arcs incident to site $2p$ turns exactly the overlay cycle containing that site into the open path between the defects and leaves the other $C(a,c)-1$ cycles unchanged. Hence the ordinary one-defect Gram value of the images is $b^{C(a,c)-1}$, whose value at $b=0$ equals $\phi'(a,c)$. Thus the matrix of $\phi'$ is exactly the Gram matrix of $W_{2p-1,1}(\mathbb C,0)$. [F1, F3, step 1.1, construct]

3.1 For $W_{2p-1,1}$ the arc count is $p-1$, the defect count is $1$, and $q^2=-1$ has order $\kappa=2$. Since $\kappa\mid(1+1)$, this is a critical label. By [F4], its Gram form is nondegenerate; step 2.1 then shows that $\phi'$ is nondegenerate. [F4, F5, step 2.1, given]

3.2 For two link states $x,y$ on $2p$ sites with two defects, define $D_{x,y}$ to be the Temperley–Lieb diagram whose bottom arcs are those of $x$, whose top arcs are those of $y$, and whose two unmatched bottom sites are joined to the two unmatched top sites in left-to-right order by propagating strands. This matching is planar and is an allowed basis diagram. Let $x'$ and $y'$ be the perfect matchings obtained by joining the two defects of $x$ and $y$, respectively. If $z$ is a basis perfect matching and $C(y',z)$ is the number of cycles in the overlay of $y'$ and $z$, stacking $z$ above $D_{x,y}$ leaves the bottom matching $x'$ and removes exactly $C(y',z)-1$ closed cycles. Therefore $z\cdot D_{x,y}=\delta^{C(y',z)-1}x'$, where the coefficient at $\delta=0$ is defined as $1$ when $C(y',z)=1$ and $0$ when $C(y',z)>1$. This coefficient is exactly $\phi'(y',z)$, so $z\cdot D_{x,y}=\phi'(y',z)x'$. The same equality holds for every $z$ by linearity. [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

4.1 Let $z\ne0$. Nondegeneracy of $\phi'$ gives a nonzero functional $\phi'(-,z)$, so at least one perfect-matching basis vector $y'$ has $\phi'(y',z)\ne0$. For any target basis matching $x'$, cut from $x'$ and $y'$ the arcs incident to site $2p$ to obtain two-defect link states $x,y$. By step 3.2, $z\cdot D_{x,y}$ is a nonzero scalar multiple of $x'$. Thus the submodule generated by $z$ contains every basis vector and equals $W_{2p,0}$. Every nonzero submodule contains such a $z$, so the module is simple. [F1, F2, step 3.1, step 3.2, choose, algebra] ∎
