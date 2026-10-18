---
id: lem-modc-internal-end-reconstruction-and-eilenberg-watts
kind: lemma
title: Right module internal ends and Eilenberg–Watts equivalence
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§7.9–7.11
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field $k$ and $\mathcal M$ a finite semisimple right $\mathcal C$-module category. There is an algebra $A$ and a right module equivalence $\mathcal M\simeq\operatorname{Mod}^{l}_{\mathcal C}(A)$. This assertion does not yet assert separability. Fix the convention
$$\operatorname{Hom}_{\mathcal C}(X,[m,n])=\operatorname{Hom}_{\mathcal M}(m\odot X,n).$$
One can take $A=[m,m]$ whenever $m$ is a module generator, meaning every object of $\mathcal M$ is a quotient of $m\odot X$ for some $X\in\mathcal C$. In particular the direct sum of the simple representatives is such a generator. The multiplication is specified below. For any such algebras $A,B$, a right exact right module functor from left $A$-modules to left $B$-modules is uniquely, up to canonical isomorphism, $P\mapsto Q\otimes_A P$ for a $B$-$A$ bimodule $Q$. The equivalence identifies module-natural transformations with bimodule maps. No braiding is assumed.

For a finite semisimple left $\mathcal C$-module category and a generator $m$ with every $n$ a quotient of $X\odot m$, the left-action version is $\operatorname{Hom}_{\mathcal C}(X,[m,n])=\operatorname{Hom}_{\mathcal M}(X\odot m,n)$ and $n\mapsto[m,n]$ is an equivalence to right modules over $A=[m,m]$, with $[m,X\odot n]\cong X\otimes[m,n]$. This version likewise does not require or assert separability.

## Facts & Assumptions

[F1] The right module action and its associativity and unit equations are as in [[def-finite-semisimple-module-category-over-fusion-category]]. All functors in the statement are $k$-linear.

[F2] Algebra objects, left modules and bimodules are as in [[def-separable-algebra-and-bimodule-in-fusion-category]]. Relative tensors below are cokernels of the difference of the two action maps; they exist in the finite semisimple abelian category $\mathcal C$, whether or not the algebra is separable.

## Proof

**Given:** $\mathcal C,\mathcal M,m$ as stated. Parentheses in composites stand for the specified associators and action associators. Every comparison is constructed by the displayed adjunctions, so coherence is checked with those associators.

1.1 Write $I$ for representatives of the simple objects of $\mathcal C$. The object $[m,n]=\bigoplus_{i\in I}\operatorname{Hom}_{\mathcal M}(m\odot i,n)\otimes_k i$ represents the stated functor: the decomposition $X=\bigoplus_i\operatorname{Hom}(i,X)\otimes i$ identifies both Hom spaces, naturally in $X$. Evaluation $v_n:m\odot[m,n]\to n$ is the corresponding universal morphism. The adjunction $T\dashv R$, $T(X)=m\odot X$, $R(n)=[m,n]$, is thus explicit, and $R$ is exact since each coefficient $\operatorname{Hom}(m\odot i,-)$ is exact in a semisimple category. It is faithful by the generator hypothesis: if $h:n\to n'$ is nonzero, precomposing with an epimorphism $TX\to n$ gives a nonzero map, and adjunction identifies its image under $R$ as nonzero. [F1, construct]

1.2 Let $F:\operatorname{Mod}^{l}(A)\to\operatorname{Mod}^{l}(B)$ be right exact and a right module functor, and put $Q=F(A)$. It has its given left $B$-action. Apply $F$ to the left $A$-linear map $\mu:A\otimes A\to A$ and use $F(A\otimes A)\cong Q\otimes A$ to obtain $r_Q:Q\otimes A\to Q$. The algebra identities for $\mu$ and coherence of the module comparison give the right action identities for $r_Q$; since $F(\mu)$ is a left $B$-map, the two actions commute. For a left $A$-module $P$, define $Q\otimes_A P$ as the cokernel of $r_Q\otimes1-1\otimes l_P$ on $Q\otimes A\otimes P$; the commuting left $B$-action descends. Tensoring and cokernels are right exact, so this is a right exact right module functor. [F1, F2, construct]

2.1 For any $X$, choose its dual $X^\vee$ with evaluation $X\otimes X^\vee\to\mathbf1$ and coevaluation $\mathbf1\to X^\vee\otimes X$. Rigidity gives natural bijections $\operatorname{Hom}(Y,R(n\odot X))=\operatorname{Hom}(m\odot Y,n\odot X)=\operatorname{Hom}(m\odot(Y\otimes X^\vee),n)=\operatorname{Hom}(Y,R(n)\otimes X)$. Yoneda gives $R(n\odot X)\cong R(n)\otimes X$. Applying this construction successively to $X,Y$ and applying it once to $X\otimes Y$ give the same bijection: the evaluation of a tensor product is the composite of the two evaluations in reverse order, and their units and counits satisfy the two zigzag identities. This proves the module pentagon for this comparison; evaluation against $\mathbf1$ proves its triangle. Evaluation and the adjunction unit are module-natural by the same representing bijections. [step 1.1, F1, construct]

2.2 The two maps $A\otimes A\otimes U(P)\rightrightarrows A\otimes U(P)$, namely $\mu\otimes1$ and $1\otimes l_P$, have coequalizer $l_P:A\otimes U(P)\to P$ in left $A$-modules. Indeed, if $h$ equalizes them, its unique factor is $h(\eta\otimes1)$; the equalizing identity says both that this is left $A$-linear and that its composite with $l_P$ equals $h$. Since $F$ is right exact, applying it preserves this coequalizer. Using $F(A\otimes X)\cong Q\otimes X$, the resulting parallel maps are exactly $r_Q\otimes1$ and $1\otimes l_P$. Thus their universal maps give a natural isomorphism $Q\otimes_A P\cong F(P)$. Its module compatibility follows on the free source from the module comparison of $F$, and follows on $P$ by composing with the epimorphism from that free source. [step 1.2, F2, construct]

3.1 Set $A=R(m)$. Its unit $\eta:\mathbf1\to A$ represents $1_m$ and its multiplication $\mu:A\otimes A\to A$ represents $m\odot(A\otimes A)\cong(m\odot A)\odot A\xrightarrow{v_m\odot1}m\odot A\xrightarrow{v_m}m$. Associativity follows because both triple composites represent evaluation three times, with equality given by the module pentagon; the two unit identities represent evaluation with an identity inserted. In particular on $\operatorname{Hom}(\mathbf1,A)=\operatorname{End}(m)$ this multiplication is $a\cdot b=b\circ a$. The action $A\otimes R(n)\to R(n)$ represents $m\odot(A\otimes R(n))\to m\odot R(n)\to n$, first using $v_m$, then $v_n$. The same triple-evaluation computation proves that it is a left action. Equivalently it is the action of the monad $RT=A\otimes-$ obtained from the adjunction, so its associativity and unit also follow by applying the two adjunction triangles. The resulting comparison $K:n\mapsto R(n)$ is a right module functor to left $A$-modules; $K(TX)=A\otimes X$ with its free left action. [step 1.1, step 2.1, F2, construct]

3.2 A module-natural transformation $F\to F'$ evaluated at $A$ is a $B$-$A$ bimodule map: $B$-linearity is automatic and $A$-linearity follows by naturality at $\mu$ and module-naturality. Conversely a bimodule map $Q\to Q'$ induces maps of the two coequalizer diagrams of step 2.2 and hence a module-natural transformation. Evaluation at $A$ recovers it, using $Q\otimes_A A\cong Q$ by the action. Every transformation is determined by its component on $A$: the module constraint determines it on $A\otimes X$, and naturality along the free epimorphism determines it on $P$. These operations are inverse and preserve identities and composition. This proves the full Eilenberg–Watts equivalence, with source algebra on the right of $Q$ and target algebra on its left. [step 1.2, step 2.2, construct]

4.1 Kernels and cokernels of maps of $A$-modules are their kernels and cokernels in $\mathcal C$, with induced actions: tensoring by $A$ is exact, hence preserves the defining kernel and cokernel diagrams. Thus the forgetful functor is exact and faithful. Every left module $P$ has a free presentation $A\otimes Y\to A\otimes X\to P\to0$: take the action $A\otimes U(P)\to P$, whose underlying map is split by $\eta\otimes1$; its kernel is another module and is likewise the quotient of a free module. For a free source, the map on Hom spaces induced by $K$ is the bijection $\operatorname{Hom}_A(A\otimes X,Rn)=\operatorname{Hom}_{\mathcal C}(X,Rn)=\operatorname{Hom}_{\mathcal M}(TX,n)$. [step 3.1, F2, construct]

5.1 Every object of $\mathcal M$ is a quotient of $T(X)$ by the module-generator hypothesis (for the sum of simples, take $X$ to be a finite sum of units); applying the same argument to its kernel gives a presentation $T(Y)\to T(X)\to n\to0$. Exactness of $R$ sends it to a free presentation of $K(n)$. Applying $\operatorname{Hom}(-,n')$ and $\operatorname{Hom}_A(-,K(n'))$ identifies the two kernels of the maps out of the free terms by step 4.1. Hence $K$ is fully faithful. Conversely, lift the first map of a free presentation of $P$ uniquely to $T(Y)\to T(X)$ by step 4.1 and take its cokernel $n$ in $\mathcal M$. Exactness gives $K(n)\cong P$. Thus $K$ is the asserted right module equivalence. The zero category is included by taking $m=0$ and the zero algebra, whose unit identity holds on the zero object. [step 1.1, step 3.1, step 4.1, construct]

6.1 To obtain the left-action version, view a left $\mathcal C$-module as a right $\mathcal C^{\mathrm{rev}}$-module by $n\mathbin{\triangleleft}X=X\odot n$. The module pentagon is the same pentagon with the tensor inputs reversed, so all preceding constructions apply. An algebra in $\mathcal C^{\mathrm{rev}}$ gives an algebra $A$ in $\mathcal C$ with the same underlying multiplication morphism $A\otimes A\to A$, reading tensor positions in the order of $\mathcal C$; a left module over it in $\mathcal C^{\mathrm{rev}}$ is exactly a right $A$-module in $\mathcal C$. Thus the fully faithful and essentially surjective comparison of step 5.1 becomes the stated equivalence to right modules, and the projection comparison of step 2.1 becomes $[m,X\odot n]\cong X\otimes[m,n]$. In this convention the internal-end multiplication represents $A\odot(A\odot m)\to A\odot m\to m$, and on ordinary endomorphisms is usual composition. In particular $[m,X\odot m]\cong X\otimes A$ as right $A$-modules, with the free right action. No separability assertion entered any of these arguments. [step 2.1, step 3.1, step 5.1, F1, construct] ∎
