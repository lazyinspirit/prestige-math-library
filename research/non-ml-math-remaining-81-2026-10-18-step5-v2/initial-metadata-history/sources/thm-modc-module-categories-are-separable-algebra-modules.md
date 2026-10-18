---
id: thm-modc-module-categories-are-separable-algebra-modules
kind: theorem
title: Finite semisimple module categories are separable algebra modules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - lem-modc-internal-end-reconstruction-and-eilenberg-watts
  - lem-modc-module-functor-categories-are-finite-semisimple
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§7.8–7.12 and §7.21
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field of characteristic zero, and let $\mathcal M$ be a finite semisimple right $\mathcal C$-module category. There is a separable algebra object $A$ in $\mathcal C$ and a right $\mathcal C$-module equivalence $\mathcal M\simeq\operatorname{Mod}^{l}_{\mathcal C}(A)$, the category of left $A$-modules fixed in [[def-separable-algebra-and-bimodule-in-fusion-category]]. The construction below fixes the right-action/internal-Hom convention, gives the internal-end multiplication and a separability section, and proves full faithfulness and essential surjectivity. With these conventions, right module functors from left $A$-modules to left $B$-modules correspond to $B$-$A$ bimodules $Q$, acting by $Q\otimes_A-$; module-natural transformations correspond to bimodule maps.

## Facts & Assumptions

[F1] [[lem-modc-internal-end-reconstruction-and-eilenberg-watts]] proves, without separability, the comparison for $A=[m,m]$, where $\operatorname{Hom}_{\mathcal C}(X,[m,n])=\operatorname{Hom}_{\mathcal M}(m\odot X,n)$ and $m$ is a sum of simple representatives. The multiplication represents successive evaluations, its unit represents $1_m$, the comparison is $n\mapsto[m,n]$ with its left $A$-action, and this functor is fully faithful and essentially surjective. The same supplier proves the right exact Eilenberg–Watts equivalence including maps.

[F2] [[lem-modc-module-functor-categories-are-finite-semisimple]] proves finite semisimplicity by canonical-algebra averaging independently of separability of $A$. In its notation an ordinary natural transformation $t:P\to Q$ between module functors is averaged by $\operatorname{Av}(t)=\rho_Q(1_K\cdot t)(1_K\cdot\rho_P)(e\cdot1_P)$, where $e$ is the canonical separability element. This is module-natural, fixes module-natural maps, and preserves a section of a module-natural epimorphism.

[F3] Separability and bimodule conventions are as in [[def-separable-algebra-and-bimodule-in-fusion-category]].

## Proof

**Given:** $\mathcal C,\mathcal M$ as stated. The zero module category uses the zero algebra and zero section, so suppose $\mathcal M$ is nonzero.

1.1 Choose $m$ as in F1, construct $A=[m,m]$, and use the stated comparison $\mathcal M\simeq\operatorname{Mod}^{l}(A)$. Concretely its multiplication is the unique map $\mu:A\otimes A\to A$ representing $m\odot(A\otimes A)\to(m\odot A)\odot A\to m\odot A\to m$, the last two maps being evaluation; hence on ordinary endomorphisms $a\cdot b=b\circ a$. Its unit represents $1_m$. F1 proves associativity, unitality, the left action on $[m,n]$, and right module compatibility by the two rigidity adjunctions, and proves full faithfulness and surjectivity using exact internal Homs and free presentations. In particular the category of left $A$-modules is finite semisimple before any separability assertion is made. [F1, construct]

2.1 On this left module category let $S(P)=A\otimes U(P)$, with the free action on the first factor, where $U$ forgets the action. There is a module-natural epimorphism $r:S\to\operatorname{Id}$ with $r_P=l_P$, the action on $P$. Epimorphy follows because $l_P(\eta\otimes1)=1$ on underlying objects, and kernels and cokernels of $A$-module maps are inherited from $\mathcal C$. This assertion does not require the displayed underlying section to be $A$-linear. Choose representatives $p$ of the finitely many simple left $A$-modules. Since that module category is semisimple, choose an $A$-linear section $j_p:p\to S(p)$ of $r_p$. Extend these sections by additive decomposition to an ordinary natural transformation $t:\operatorname{Id}\to S$: on $P=\bigoplus_p\operatorname{Hom}_A(p,P)\otimes p$, take the direct sum of the corresponding maps $j_p$ and transport using the canonical evaluation decomposition. Its naturality follows because any map is a matrix on the multiplicity spaces. By construction $rt=1$. [step 1.1, F3, construct]

3.1 Apply the explicit averaging in F2 to $t$ and set $s=\operatorname{Av}(t)$. Then $s$ is module-natural and $rs=1$. Define the requested separability section by $\sigma_A=s_A:A\to S(A)=A\otimes A$. Every component of $s$ is a left $A$-module map, so $\sigma_A$ is left $A$-linear. It is also right $A$-linear: naturality of $s$ at the left $A$-map $\mu:A\otimes A\to A$ gives $S(\mu)s_{A\otimes A}=s_A\mu$. Module-naturality identifies $s_{A\otimes A}=s_A\otimes1_A$, and $S(\mu)=1_A\otimes\mu$, so $(1_A\otimes\mu)(\sigma_A\otimes1_A)=\sigma_A\mu$. Finally $r_A\sigma_A=1_A$ is $\mu\sigma_A=1_A$. This constructs an actual bimodule section; it uses finitely many chosen sections and the fixed normalized canonical separability element, without requiring a pivotal or spherical structure on $\mathcal C$. Thus $A$ is separable. [step 2.1, F2, F3, construct, algebra]

4.1 For another finite semisimple right module category represented by $B$, F1 identifies every right exact module functor with $Q\otimes_A-$ for $Q=F(A)$ a $B$-$A$ bimodule, whose right action is $F(\mu)$ under $F(A\otimes A)\cong F(A)\otimes A$. Every linear functor between the semisimple categories here is exact, so there is no additional exactness restriction. F1 proves that the canonical free coequalizer of each module gives the natural isomorphism to this tensor functor, and that evaluation of transformations at $A$ and tensoring a bimodule map are inverse operations. This proves the full claimed equivalence and its precise orientation together with the separable-algebra construction. [step 1.1, step 3.1, F1, construct] ∎

## Remarks

The unrestricted positive-characteristic version is false. For $\mathcal C=\operatorname{Vec}_{\mathbb Z/p}$ over an algebraically closed field of characteristic $p$, its one-simple module category $\operatorname{Vec}$ has endofunctor category $\operatorname{Rep}_k(\mathbb Z/p)$, which is not semisimple. If it were represented by a separable algebra, averaging by its separability element on the left and right would split every epimorphism of bimodules, making its module endofunctor category semisimple by Eilenberg–Watts, a contradiction. Characteristic zero restores exactly the approved PA-48 field scope.
