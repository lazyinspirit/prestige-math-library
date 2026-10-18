---
id: lem-modc-module-functors-have-adjoints-and-separable-monads-split
kind: lemma
title: Module functor adjoints and separable-monad splittings in Mod(C)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-fusion-and-multifusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Theorem 1.4.8 and Appendix A.3
      url: https://arxiv.org/pdf/1812.11933
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§7.11–7.12
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field of characteristic zero, and let $\mathcal M,\mathcal N$ be finite semisimple right $\mathcal C$-module categories. Every module functor $F:\mathcal M\to\mathcal N$ has left and right adjoints whose adjunction units and counits are module-natural. Every separable monad in the 2-category of finite semisimple $\mathcal C$-module categories has a separable splitting in that 2-category.

Here a separable monad is $(T,\mu,\eta)$ with a module-natural section $\sigma:T\to T^2$ of $\mu$ satisfying $T\mu\circ\sigma T=\sigma\circ\mu=\mu T\circ T\sigma$. A separable splitting means an adjunction $L\dashv U$ inducing this monad whose counit admits a module-natural section.

## Facts & Assumptions

[F1] Right module categories and module functors have the specified associators, unitors and comparisons in [[def-finite-semisimple-module-category-over-fusion-category]].

[F2] Rigidity in [[def-fusion-and-multifusion-category]] supplies evaluation and coevaluation maps satisfying both zigzag identities. For a finite semisimple $k$-linear category, write $V\otimes_k a$ for a finite copower.

## Proof

**Given:** $\mathcal C,\mathcal M,\mathcal N,F$ as stated, with comparison $f_{m,X}:F(m\odot X)\to F(m)\odot X$.

1.1 Choose representatives $a$ of the finitely many simple objects of $\mathcal M$. Put $R(n)=\bigoplus_a\operatorname{Hom}_{\mathcal N}(F(a),n)\otimes_k a$ and $L(n)=\bigoplus_a\operatorname{Hom}_{\mathcal N}(n,F(a))^*\otimes_k a$. Since $\operatorname{End}(a)=k$, decomposition into these simples gives natural bijections $\operatorname{Hom}_{\mathcal M}(m,Rn)=\operatorname{Hom}_{\mathcal N}(Fm,n)$ and $\operatorname{Hom}_{\mathcal M}(Ln,m)=\operatorname{Hom}_{\mathcal N}(n,Fm)$. Define the units and counits to represent the identity maps under these bijections. The two triangle identities follow by applying either bijection: in each case the composite corresponds to the original identity. Thus these are actual ordinary adjunctions, with no exactness or representability assumption left implicit. [F1, F2, construct]

1.2 Let $(T,\mu,\eta,\sigma)$ be a separable monad on $\mathcal M$. Define $\mathcal M^T$ to consist of pairs $(x,a)$ with $a:Tx\to x$, $a\eta_x=1$ and $aT(a)=a\mu_x$; its arrows $h:(x,a)\to(y,b)$ obey $ha=bT(h)$. The underlying additive functor $T$ is exact because $\mathcal M$ is semisimple. Thus the kernel and cokernel of $h$ carry induced $T$-actions, by exactness and the universal properties, satisfying the two algebra equations. They give the categorical kernel and cokernel in $\mathcal M^T$. The canonical comparison from coimage to image is the underlying isomorphism and preserves actions; its inverse preserves them as well. Therefore $\mathcal M^T$ is abelian and the forgetful functor $U$ is exact and faithful. Its free left adjoint is $L_T(x)=(Tx,\mu_x)$, with unit $\eta_x$ and counit at $(x,a)$ equal to $a$. The two triangles are respectively $\mu_xT\eta_x=1$ and $a\eta_x=1$. [F1, construct]

2.1 Fix a dual pair $X,X^\vee$ with evaluation $X\otimes X^\vee\to\mathbf1$ and coevaluation $\mathbf1\to X^\vee\otimes X$. Define $r_{n,X}:R(n\odot X)\to Rn\odot X$ by the following natural bijections in $m$: $\operatorname{Hom}_{\mathcal M}(m,R(n\odot X))\cong\operatorname{Hom}_{\mathcal N}(Fm,n\odot X)\cong\operatorname{Hom}_{\mathcal N}(F(m\odot X^\vee),n)\cong\operatorname{Hom}_{\mathcal M}(m\odot X^\vee,Rn)\cong\operatorname{Hom}_{\mathcal M}(m,Rn\odot X)$. The middle identification uses $f_{m,X^\vee}$ and the other identifications use the adjunction or the displayed duality. Every arrow is invertible, so Yoneda gives an invertible module comparison. To verify its pentagon, apply $\operatorname{Hom}(m,-)$ to the two paths for $X,Y$. Both paths move $Y^\vee$ and then $X^\vee$ across Hom, apply $f$ to the resulting action, then move them back. The equality of these composites is exactly the module pentagon for $f$, since evaluation of the dual of $X\otimes Y$ is the consecutive evaluation of $Y$ and $X$ with the associators. For $X=\mathbf1$ the same comparison reduces to the module unit equation for $f$. This proves all module-functor axioms for $R$. [step 1.1, F1, F2, construct]

2.2 For $(x,a)$ put $s_{(x,a)}=T(a)\sigma_x\eta_x:x\to Tx$. Its composite with $a$ is $aT(a)\sigma_x\eta_x=a\mu_x\sigma_x\eta_x=a\eta_x=1$. It is an algebra map to $(Tx,\mu_x)$: indeed $s a=T(a)\sigma_x\eta_xa=T(a)\sigma_xT(a)\eta_{Tx}=T(a)T^2(a)\sigma_{Tx}\eta_{Tx}=T(a)T(\mu_x)\sigma_{Tx}\eta_{Tx}=T(a)\sigma_x\mu_x\eta_{Tx}=T(a)\sigma_x$, while $\mu_xT(s)=\mu_xT^2(a)T(\sigma_x)T(\eta_x)=T(a)\mu_{Tx}T(\sigma_x)T(\eta_x)=T(a)\sigma_x\mu_xT(\eta_x)=T(a)\sigma_x$. Here the middle equalities use, in order, naturality, the algebra equation, the two bimodule equations for $\sigma$, and the unit equations. Naturality of $s$ in algebra maps follows by the same naturality of $\sigma,\eta$ and $ha=bT(h)$. Thus every algebra is a natural retract of its free algebra. [step 1.2, construct, algebra]

3.1 Under the bijections of step 2.1, the image of the adjunction counit $\epsilon_n:FRn\to n$ is its tensor translate, so the equality $(\epsilon_n\odot1_X)f_{Rn,X}F(r_{n,X})=\epsilon_{n\odot X}$ holds. This is precisely module-naturality of $\epsilon$. For the unit, apply the adjunction bijection to its two proposed module-naturality composites; both correspond to the identity of $F(m\odot X)$ after $f$ and its inverse cancel. Faithfulness of the bijection proves their equality. Hence both triangles from step 1.1 are identities of module-natural transformations. For $L$, use the dual pair with evaluation $X^\flat\otimes X\to\mathbf1$ and coevaluation $\mathbf1\to X\otimes X^\flat$ in the identical argument with the Hom adjunction reversed: $\operatorname{Hom}(L(n\odot X),m)\cong\operatorname{Hom}(n,Fm\odot X^\flat)\cong\operatorname{Hom}(Ln,m\odot X^\flat)\cong\operatorname{Hom}(Ln\odot X,m)$. Its middle comparison is that of $F$. Evaluation of tensor products gives the module pentagon, the unit pair gives its unit equation, and applying this bijection proves module-naturality of its unit and counit. [step 1.1, step 2.1, F1, F2, construct]

3.2 For each $x$, $L_T(x)$ is projective, since $\operatorname{Hom}_{\mathcal M^T}(L_Tx,-)=\operatorname{Hom}_{\mathcal M}(x,U-)$ is exact. Hence all objects are projective by step 2.2. Let $g$ be the sum of the finitely many simples of $\mathcal M$. Every object of $\mathcal M^T$ is a quotient of a finite sum of copies of $L_Tg$: first its underlying object is a summand of a finite sum of copies of $g$, and then its action is an epimorphism from its free object. Also $\operatorname{End}(L_Tg)$ is finite dimensional, being a subspace of an underlying Hom space in $\mathcal M$. Every object has finite length, since a strict chain of subobjects remains a strict chain after the faithful exact functor $U$ and $U(x,a)=x$ has finite length. With all objects projective, all short exact sequences split, so each object is a finite sum of simples. Each simple is a summand of $L_Tg$ because its quotient from a finite sum of $L_Tg$ splits; the finite length of $L_Tg$ bounds the number of such simples. Thus $\mathcal M^T$ is finite semisimple with finite dimensional Hom spaces. [step 1.2, step 2.2, construct]

4.1 Write $t_{x,X}:T(x\odot X)\to Tx\odot X$ for the module comparison. Define $(x,a)\odot X=(x\odot X,(a\odot1)t_{x,X})$. The fact that $\mu$ and $\eta$ are module-natural proves its two algebra equations. The associativity and unit constraints inherited from $\mathcal M$ are algebra maps by the pentagon and unit equation for $t$, and obey their own pentagon and triangle because $U$ is faithful. Thus $\mathcal M^T$ is a finite semisimple right module category. The displayed action makes $U$ a module functor, and $t$ gives $L_T$ its module structure. Module-naturality of $\eta,\mu$ verifies the adjunction unit and counit. Module-naturality of $\sigma,\eta$ and of the action $a$ verifies that $s$ from step 2.2 is module-natural as well. Consequently $L_T\dashv U$ is a separable adjunction, induces exactly $T$ with its multiplication and unit, and supplies the required splitting. [step 1.2, step 2.2, step 3.2, F1, construct] ∎
