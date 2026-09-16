---
id: thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras
kind: theorem
title: Existence of Cartan subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, def-simple-semisimple-and-reductive-lie-algebras, thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra, thm-engels-theorem, prop-nilpotent-lie-algebras-are-solvable, thm-lies-theorem, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §2; Theorem 2.9 and Proposition 2.13"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional complex semisimple Lie
algebra has a Cartan subalgebra
([[def-cartan-subalgebra-of-a-lie-algebra]]). Indeed every maximal toral
subalgebra ([[def-toral-and-maximal-toral-subalgebra]]) of such an algebra is
a Cartan subalgebra.

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is used only through [L1].

[L1] Every element $x\in\mathfrak g$ has an abstract Jordan decomposition $x=x_s+x_n$, whose parts satisfy $\operatorname{ad}_{x_s}=p(\operatorname{ad}_x)$ and $\operatorname{ad}_{x_n}=q(\operatorname{ad}_x)$ for polynomials $p,q$, and $\operatorname{ad}_{x_s}$, $\operatorname{ad}_{x_n}$ are semisimple, respectively nilpotent ([[thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra]]).

[L2] A finite-dimensional Lie algebra is nilpotent if and only if all its adjoint operators are nilpotent ([[thm-engels-theorem]]), and a nilpotent Lie algebra is solvable ([[prop-nilpotent-lie-algebras-are-solvable]]).

[L3] Over an algebraically closed field of characteristic zero, a finite-dimensional solvable Lie algebra acts triangularly on every nonzero finite-dimensional module, by Lie's theorem ([[thm-lies-theorem]]).

[L4] A pairwise commuting family of diagonalisable endomorphisms of a finite-dimensional space is simultaneously diagonalisable, so a sum of commuting semisimple endomorphisms is semisimple ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L5] The Killing form $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ is symmetric and invariant: $B([z,x],y)+B(x,[z,y])=0$; it is nondegenerate because $\mathfrak g$ is semisimple ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]]).

[L6] The algebra is centerless and perfect: $Z(\mathfrak g)=0$ and $[\mathfrak g,\mathfrak g]=\mathfrak g$ ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]); semisimplicity means vanishing of the radical ([[def-simple-semisimple-and-reductive-lie-algebras]]); and $\operatorname{ad}_{[u,v]}=[\operatorname{ad}_u,\operatorname{ad}_v]$ ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L7] A toral subalgebra is an abelian subalgebra all of whose adjoint operators are semisimple, and it is maximal toral when maximal by inclusion ([[def-toral-and-maximal-toral-subalgebra]]); a Cartan subalgebra is nilpotent and equal to its normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]]).

[L8] $\operatorname{ad}_x(y)=[x,y]$ ([[def-derivation-of-a-lie-algebra]]).

## Proof

**Proof technique:** maximal toral subalgebra and Killing-form counting.

1.1 If $\mathfrak g=0$, the zero subalgebra is nilpotent and equals its own normalizer, hence is a Cartan subalgebra. Assume now $\mathfrak g\ne0$. There is a nonzero semisimple element: if every element of $\mathfrak g$ had nilpotent adjoint operator, then [L2] would make $\mathfrak g$ nilpotent, hence solvable, so its radical would be $\mathfrak g\ne0$, contradicting semisimplicity [L6]. Choose an element $x$ whose adjoint operator is not nilpotent and let $x=x_s+x_n$ be its decomposition from [L1]; if $x_s=0$ then $\operatorname{ad}_x=\operatorname{ad}_{x_n}$ is nilpotent, contrary to the choice of $x$, so $x_s\ne0$ is semisimple. [L1, L2, L6, algebra]

1.2 For $x\in\mathfrak l$ the Jordan parts lie in $\mathfrak l$: by [L1] there is a polynomial $p$ with $\operatorname{ad}_{x_s}=p(\operatorname{ad}_x)$, and $[\operatorname{ad}_x,\operatorname{ad}_h]=\operatorname{ad}_{[x,h]}=0$ for $h\in\mathfrak t$ [L6, L8], so $[\operatorname{ad}_{x_s},\operatorname{ad}_h]=0$ and therefore $\operatorname{ad}_{[x_s,h]}=0$, that is, $[x_s,h]\in Z(\mathfrak g)=0$; thus $x_s\in\mathfrak l$, and $x_n=x-x_s\in\mathfrak l$ as well. Moreover $\mathfrak t+\mathbb Cx_s$ is toral: it is abelian because $[x_s,\mathfrak t]=0$, and each of its elements has semisimple adjoint operator by [L4] since $\operatorname{ad}_{x_s}$ and the commuting operators $\operatorname{ad}_h$ are semisimple. By the maximality of $\dim\mathfrak t$ we get $x_s\in\mathfrak t$. [L1, L4, L6, L7, L8, algebra]

2.1 Among the toral subalgebras of $\mathfrak g$ choose one, $\mathfrak t$, of maximal dimension; such a choice exists because the zero subalgebra is toral and dimensions are bounded, and $\mathfrak t\ne0$ by step 1.1. By [L4] and [L8] the operators $\operatorname{ad}_h$ for $h\in\mathfrak t$ are simultaneously diagonalisable, so

2.2 For $x\in\mathfrak l$ we have $\operatorname{ad}_{\mathfrak l}(x)=\operatorname{ad}_{\mathfrak l}(x_n)$, because $x_s\in\mathfrak t$ centralises $\mathfrak l$; by [L1] the operator $\operatorname{ad}_{x_n}$ is nilpotent, so every adjoint operator of $\mathfrak l$ is nilpotent on $\mathfrak l$ and [L2] makes $\mathfrak l$ nilpotent. [L1, L2, step 1.2, algebra]

3.1 The algebra $\mathfrak l$ is abelian. It is nilpotent by step 2.2, hence solvable, so by [L3] there is a basis of $\mathfrak g$ in which all $\operatorname{ad}_x$, $x\in\mathfrak l$, are upper triangular. For $x\in[\mathfrak l,\mathfrak l]$ the operator $\operatorname{ad}_x$ is a commutator of two upper triangular operators, hence strictly upper triangular, hence nilpotent; consequently $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)=0$ for every $y\in\mathfrak l$, since a strictly upper triangular operator times an upper triangular operator stays strictly upper triangular. [L2, L3, L5, step 2.2, algebra]

3.2 Invariance of $B$ gives $(\lambda(h)+\mu(h))B(y,z)=B([h,y],z)+B(y,[h,z])=0$ for $y\in\mathfrak g_\lambda$, $z\in\mathfrak g_\mu$ and $h\in\mathfrak t$; if $\lambda+\mu\ne0$ some $h$ has $(\lambda+\mu)(h)\ne0$, so $B(\mathfrak g_\lambda,\mathfrak g_\mu)=0$. [L5, L8, step 2.1, algebra]

4.1 The restriction $B|_{\mathfrak l}$ is nondegenerate: if $x\in\mathfrak l$ satisfies $B(x,\mathfrak l)=0$, then for every nonzero weight $\lambda$ we have $B(x,\mathfrak g_\lambda)=0$ by step 3.2, and $B(x,\mathfrak l)=0$ by hypothesis, so $B(x,\mathfrak g)=0$ and [L5] gives $x=0$. Applying this to step 3.1 yields $[\mathfrak l,\mathfrak l]=0$. [L5, step 3.1, step 3.2, algebra]

5.1 Every element of $\mathfrak l$ is semisimple: for $x\in\mathfrak l$ we have $x_n\in\mathfrak l$ by step 1.2, and $[x_n,y]=[x,y]-[x_s,y]=0$ for every $y\in\mathfrak l$ because $x\in\mathfrak l$ and $x_s\in\mathfrak t$; hence $\operatorname{ad}_{x_n}$ commutes with $\operatorname{ad}_y$ and the product $\operatorname{ad}_{x_n}\operatorname{ad}_y$ is nilpotent, so $B(x_n,y)=0$ for all $y\in\mathfrak l$. Nondegeneracy from step 4.1 forces $x_n=0$. Thus $\mathfrak l$ is abelian and consists of semisimple elements, i.e. $\mathfrak l$ is toral; since $\mathfrak t\subseteq\mathfrak l$, maximality gives $\mathfrak l=\mathfrak t$. [L1, L5, step 1.2, step 4.1, algebra]

6.1 Finally $N_{\mathfrak g}(\mathfrak t)=\mathfrak t$: if $x\in N_{\mathfrak g}(\mathfrak t)$ and $x=\sum_\lambda x_\lambda$ is its decomposition from step 2.1, then for $h\in\mathfrak t$ the element $[h,x_\lambda]=\lambda(h)x_\lambda$ lies in $[x,\mathfrak t]\subseteq\mathfrak t=\mathfrak g_0$, so $\lambda(h)x_\lambda=0$ for all $h$ and hence $x_\lambda=0$ for $\lambda\ne0$; therefore $x\in\mathfrak g_0=\mathfrak l=\mathfrak t$. Since $\mathfrak t$ is abelian and hence nilpotent and equals its normalizer, [L7] makes it a Cartan subalgebra. The Axiom of Choice was used only through [L1]. [A1, L1, L7, step 5.1, algebra] ∎
