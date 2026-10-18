---
id: lem-modc-module-functor-categories-are-finite-semisimple
kind: lemma
title: Module-functor categories are finite semisimple
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - lem-canonical-fusion-category-algebra-is-separable
  - lem-modc-internal-end-reconstruction-and-eilenberg-watts
  - def-finite-semisimple-module-category-over-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§7.11–7.12 and §7.21
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

For finite semisimple right $\mathcal C$-module categories $\mathcal M,\mathcal N$ over a fusion category over an algebraically closed field $k$ of characteristic zero, the category $\operatorname{Fun}_{\mathcal C}(\mathcal M,\mathcal N)$ of module functors and module-natural transformations is finite semisimple. In addition, evaluation at the tensor unit identifies $\operatorname{Fun}_{\mathcal C}(\mathcal C,\mathcal C)$ with $\mathcal C$ and sends the identity module functor to $\mathbf1_{\mathcal C}$; hence the unit object of the monoidal $2$-category is simple. Here “finite semisimple” means a $k$-linear abelian category with finitely many simple isomorphism classes, finite dimensional Hom spaces, and every object a finite direct sum of simples.

## Facts & Assumptions

[F1] By [[lem-canonical-fusion-category-algebra-is-separable]], the canonical algebra $K=\bigoplus_i i\boxtimes i^\vee$ in $\mathcal D=\mathcal C\boxtimes\mathcal C^{\mathrm{rev}}$ is separable. Here $i^\vee$ has evaluation $i\otimes i^\vee\to\mathbf1$. Its multiplication on $(i\otimes j)\boxtimes(j^\vee\otimes i^\vee)$ is the sum of $f\boxtimes g^\vee$ over simple $k$ and dual splitting maps $f:i\otimes j\to k$, $g:k\to i\otimes j$, with $fg=1_k$ for matching basis indices. Its separability element $e:\mathbf1\to K\otimes K$ satisfies $\mu e=\eta$ and the centrality equation.

[F2] Right actions, module comparisons and transformations are as in [[def-finite-semisimple-module-category-over-fusion-category]]. Reconstruction and the correctly oriented Eilenberg–Watts equivalence, without any separability hypothesis, are proved in [[lem-modc-internal-end-reconstruction-and-eilenberg-watts]].

## Proof

**Given:** $\mathcal C,\mathcal M,\mathcal N$ as stated. Write $R_X^{\mathcal M}(m)=m\odot X$ and similarly for $\mathcal N$; all products below retain the given associators.

1.1 The ordinary linear functor category $\mathcal E=\operatorname{Fun}_k(\mathcal M,\mathcal N)$ is finite semisimple: evaluation on representatives $m_a$ of the simples of $\mathcal M$, followed by decomposition in simples $n_b$ of $\mathcal N$, identifies it with the category of finite matrices of vector spaces $V_{ba}=\operatorname{Hom}(n_b,F(m_a))$. A natural transformation is exactly a matrix of linear maps; conversely the matrix defines the functor by additive extension. The category $\mathcal D$ acts on $\mathcal E$ by $(X\boxtimes Y)\cdot F=R_Y^{\mathcal N}FR_X^{\mathcal M}$. Indeed $R_YR_W=R_{W\otimes Y}$ and $R_ZR_X=R_{X\otimes Z}$, giving the product $(X\otimes Z)\boxtimes(W\otimes Y)$ in $\mathcal D$. The action coherence follows by applying the two module pentagons; its two unit equations are the two module triangles. Thus $K\cdot-$ is an exact linear monad on $\mathcal E$ with multiplication induced by that of $K$. [F1, F2, construct]

2.1 A left $K$-action on $F$ consists of components $\theta_{i,m}:F(m\odot i)\odot i^\vee\to F(m)$. By duality these correspond bijectively to $c_{m,i}:F(m\odot i)\to F(m)\odot i$; the inverse correspondence is $\theta_{i,m}=(1\odot\operatorname{ev}_i)(c_{m,i}\odot1)$. Finite semisimplicity extends these maps uniquely and naturally from simple $i$ to every $X$: decompose $X$ into simples, use additivity on the source, and the dual decomposition on the dual factor. Independence of bases follows from the identity $\sum_a g_a f_a=1_X$ for dual inclusion/projection maps. Expanding $\theta(\mu\cdot1)=\theta(1\cdot\theta)$ on the $(i,j)$ summand and using the formula for $\mu$ in F1 gives, after taking mates, $c_{m,i\otimes j}=(c_{m,i}\odot1_j)c_{m\odot i,j}$ with the module associators inserted: the sum over $f,g$ inserts exactly $\sum g f=1_{i\otimes j}$. The unit action equation gives $c_{m,\mathbf1}=1$ under the unitors. Conversely those two equations give the action equation on every summand of $K\otimes K$, hence on the full direct sum. [step 1.1, F1, F2, construct]

3.1 These initially lax comparisons are invertible by rigidity. Choose a dual $X^\flat$ with $b:\mathbf1\to X\otimes X^\flat$ and $d:X^\flat\otimes X\to\mathbf1$. An inverse to $c_{m,X}$ is the composite $F(m)\odot X\xrightarrow{F(1_m\odot b)\odot1_X}F(m\odot X\odot X^\flat)\odot X\xrightarrow{c_{m\odot X,X^\flat}\odot1_X}F(m\odot X)\odot X^\flat\odot X\xrightarrow{1\odot d}F(m\odot X)$. For its composite after $c_{m,X}$, naturality with $b$, followed by the product equation of step 2.1, leaves the zigzag $(1_X\otimes d)(b\otimes1_X)=1_X$. For the composite before $c_{m,X}$ use naturality with $d$ and the same product equation; the other zigzag and the unit equation leave $1_{F(m\odot X)}$. A map of $K$-actions is exactly a natural transformation commuting with all $\theta_i$, equivalently all $c_X$. Thus the category of $K$-modules in $\mathcal E$ is precisely $\operatorname{Fun}_{\mathcal C}(\mathcal M,\mathcal N)$, including its morphisms. [step 2.1, F2, construct]

4.1 Kernels and cokernels of $K$-module maps exist and are their underlying kernels and cokernels in $\mathcal E$, since $K\cdot-$ is exact. They carry the induced actions by the universal properties. For modules $(P,\rho_P),(Q,\rho_Q)$ and an arbitrary underlying arrow $t:P\to Q$, put $\operatorname{Av}(t)=\rho_Q(1_K\cdot t)(1_K\cdot\rho_P)(e\cdot1_P)$. In symbolic notation for this composite it is $\operatorname{Av}(t)(p)=\sum_a x_a t(y_a p)$, where $e=\sum_a x_a\otimes y_a$ denotes the morphism $e$, not actual elements. Centrality says $\sum bx_a\otimes y_a=\sum x_a\otimes y_a b$, so associativity of the actions gives $\operatorname{Av}(t)(bp)=b\operatorname{Av}(t)(p)$ as an equality of the corresponding composites. Thus it is a module map. If $t$ already is a module map, the identity $\mu e=\eta$ gives $\operatorname{Av}(t)=t$. If $q:Q\to P$ is a module epimorphism and $qt=1_P$, the same formula gives $q\operatorname{Av}(t)=\operatorname{Av}(qt)=1_P$. Every underlying epi splits in $\mathcal E$, so all module epis split. [step 1.1, step 3.1, F1, construct, algebra]

5.1 Hom spaces of modules are finite dimensional subspaces of those in $\mathcal E$. Every module has finite length, since its subobject chains give strict subobject chains in its underlying object of $\mathcal E$. Therefore the splitting in step 4.1 implies that every module is a finite direct sum of simples. To prove finiteness of the simple set, let $g$ be the sum of the finitely many simples of $\mathcal E$. The free module $K\cdot g$ has finite length. Every module is a quotient of a finite sum of copies of $K\cdot g$: its underlying object is a summand of a finite sum of copies of $g$, apply the free functor and then the action epimorphism. Each simple is therefore a summand of a finite sum of $K\cdot g$ and hence is isomorphic to a simple constituent of $K\cdot g$. There are only finitely many. Steps 3.1–5.1 prove the finite semisimplicity assertion. Under F2 this also proves it for the correctly oriented bimodule categories, without assuming separability of their representing algebras in advance. [step 3.1, step 4.1, F2, construct]

6.1 A right module endofunctor $F$ of the regular category satisfies $F(X)=F(\mathbf1\otimes X)\cong F(\mathbf1)\otimes X$, naturally and compatibly with its comparison. Conversely $a\mapsto(a\otimes-)$ is a right module functor, with the associator as comparison. The same comparison shows that any module-natural transformation is $h\otimes1$ for its component $h$ at $\mathbf1$, and every $h$ defines one. Thus evaluation at $\mathbf1$ and $a\mapsto(a\otimes-)$ are inverse equivalences. The identity functor corresponds to $\mathbf1$, whose endomorphism algebra is $k$. Hence the identity 1-morphism of the regular module is simple, which is the asserted simple-unit condition. [F2, construct] ∎

## Remarks

Characteristic zero is essential to the unrestricted statement. If $k$ has characteristic $p$ and $G=\mathbb Z/p$, the pointed category $\operatorname{Vec}_G$ is fusion and $\operatorname{Vec}$ is its one-simple module category via forgetting the grading. Module endofunctors of $\operatorname{Vec}$ are vector spaces $V$ with coherent automorphisms indexed by $G$, hence form $\operatorname{Rep}_k(G)$. The algebra $kG=k[t]/((t-1)^p)$ is not semisimple, so this functor category is not semisimple. The corrected field scope is the characteristic-zero scope approved for PA-48.
