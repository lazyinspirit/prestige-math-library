---
id: thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras
kind: theorem
title: Cartan subalgebras are exactly maximal toral subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra, thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra, thm-engels-theorem, prop-nilpotent-lie-algebras-are-solvable, thm-lies-theorem, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Propositions 2.7, 2.10, 2.13"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. In a finite-dimensional complex semisimple Lie
algebra $\mathfrak g$, the Cartan subalgebras
([[def-cartan-subalgebra-of-a-lie-algebra]]) are precisely the maximal toral
subalgebras ([[def-toral-and-maximal-toral-subalgebra]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is used only through [L4].

[L1] Every maximal toral subalgebra of $\mathfrak g$ is a Cartan subalgebra ([[thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras]]).

[L2] Let $\mathfrak h\subseteq\mathfrak g$ be nilpotent. Its generalized weight spaces $\mathfrak g_\alpha$ with respect to $\mathfrak h$ give $\mathfrak g=\bigoplus_\alpha\mathfrak g_\alpha$, each $\mathfrak g_\alpha$ is $\operatorname{ad}_{\mathfrak h}$-stable, $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$, and $\mathfrak h\subseteq\mathfrak g_0$ ([[lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra]]).

[L3] A Cartan subalgebra is nilpotent and equals its normalizer, and the normalizer is $N_{\mathfrak g}(\mathfrak h)=\{x:[x,\mathfrak h]\subseteq\mathfrak h\}$ ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]]).

[L4] Every element $x\in\mathfrak g$ has an abstract Jordan decomposition, and for $x_s$ one has $\operatorname{ad}_{x_s}=p(\operatorname{ad}_x)$ for a polynomial $p$ with $\operatorname{ad}_{x_s}$ semisimple and $\operatorname{ad}_{x_n}$ nilpotent ([[thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra]]).

[L5] A nilpotent Lie algebra is solvable and all its adjoint operators are nilpotent ([[thm-engels-theorem]], [[prop-nilpotent-lie-algebras-are-solvable]]); a solvable Lie algebra over $\mathbb C$ acts triangularly on $\mathfrak g$ in some basis ([[thm-lies-theorem]]).

[L6] $B$ is symmetric, invariant, and nondegenerate, and $\mathfrak g$ is centerless ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L7] $\operatorname{ad}_{[u,v]}=[\operatorname{ad}_u,\operatorname{ad}_v]$ and $\operatorname{ad}_x(y)=[x,y]$ ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]], [[def-derivation-of-a-lie-algebra]]).

[L8] A toral subalgebra is abelian with all adjoint operators semisimple, and it is maximal toral when maximal by inclusion ([[def-toral-and-maximal-toral-subalgebra]]).

## Proof

**Proof technique:** direct.

1.1 The implication "maximal toral $\Rightarrow$ Cartan" is [L1]. For the converse, let $\mathfrak h$ be a Cartan subalgebra; by [L3] it is nilpotent and $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$. Let $\mathfrak g=\bigoplus_\alpha\mathfrak g_\alpha$ be its generalized weight decomposition from [L2], so that $\mathfrak g_0=\{x\in\mathfrak g:(\operatorname{ad}_H)^kx=0\text{ for all }H\in\mathfrak h\text{ and large }k\}$. [L1, L2, L3, L8]

1.2 We have $\mathfrak g_0=\mathfrak h$: [L2] gives $\mathfrak h\subseteq\mathfrak g_0$; conversely every $X\in N_{\mathfrak g}(\mathfrak h)$ lies in $\mathfrak g_0$, because $(\operatorname{ad}_H)^kX=(\operatorname{ad}_H)^{k-1}[H,X]$ with $[H,X]\in\mathfrak h$ and $\operatorname{ad}_H$ nilpotent on $\mathfrak h$ by [L5]; so $N_{\mathfrak g}(\mathfrak h)\subseteq\mathfrak g_0$. If $\mathfrak g_0\ne\mathfrak h$, then $\mathfrak g_0/\mathfrak h$ is a nonzero module for the solvable algebra $\mathfrak h$, so by [L5] there is $X\notin\mathfrak h$ whose image in $\mathfrak g_0/\mathfrak h$ is a common eigenvector for all $\operatorname{ad}_H$; the diagonal functional has value $0$ on every $H$, because $\operatorname{ad}_H$ is nilpotent on $\mathfrak g_0$, so $[H,X]\in\mathfrak h$ for all $H$ and $X\in N_{\mathfrak g}(\mathfrak h)\setminus\mathfrak h$, contradicting $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$. Hence $\mathfrak g_0=\mathfrak h$. [L2, L3, L5, algebra]

1.3 For $x\in\mathfrak h$ we have $x_s,x_n\in\mathfrak h$ and $\operatorname{ad}_{x_s}$ acts on each $\mathfrak g_\alpha$ as the scalar $\alpha(x)$: by [L4] write $\operatorname{ad}_{x_s}=p(\operatorname{ad}_x)$; on $\mathfrak g_\alpha$ the operator $\operatorname{ad}_x$ is $\alpha(x)$ plus a commuting nilpotent operator, so $p(\operatorname{ad}_x)=p(\alpha(x))$ plus a commuting nilpotent operator, while $\operatorname{ad}_{x_s}$ restricts semisimply to the invariant subspace $\mathfrak g_\alpha$; hence $\operatorname{ad}_{x_s}|_{\mathfrak g_\alpha}=p(\alpha(x))\cdot1$, and since $x_s=x-x_n$ with $\operatorname{ad}_{x_n}$ nilpotent on $\mathfrak g_\alpha$, comparison of scalar parts gives $p(\alpha(x))=\alpha(x)$. In particular $\operatorname{ad}_{x_s}$ commutes with every $\operatorname{ad}_H$, $H\in\mathfrak h$, so by [L7] $[x_s,H]=0$ and, $\mathfrak g$ being centerless [L6], $x_s\in C_{\mathfrak g}(\mathfrak h)\subseteq N_{\mathfrak g}(\mathfrak h)=\mathfrak h$; then $x_n=x-x_s\in\mathfrak h$ as well. [L2, L3, L4, L6, L7, algebra]

2.1 $\mathfrak h$ is abelian: by [L5] the solvable algebra $\mathfrak h$ acts triangularly in some basis of $\mathfrak g$, and for upper triangular matrices $A,B,C$ one has $\operatorname{tr}(ABC)=\operatorname{tr}(BAC)$ since both equal the sum of diagonal products; hence $B([H_1,H_2],H)=\operatorname{tr}(\operatorname{ad}_{[H_1,H_2]}\operatorname{ad}_H)=0$ for all $H_1,H_2,H\in\mathfrak h$. For $X\in\mathfrak g_\alpha$ with $\alpha\ne0$, the operator $\operatorname{ad}_H\operatorname{ad}_X$ maps $\mathfrak g_\beta$ into $\mathfrak g_{\beta+\alpha}$ by [L2], hence has zero trace because it has no diagonal blocks; therefore $B(H,X)=0$ for all $H\in\mathfrak h$, $\alpha\ne0$, $X\in\mathfrak g_\alpha$. Combining the two orthogonality statements with $\mathfrak g_0=\mathfrak h$ from step 1.2 gives $B([H_1,H_2],\mathfrak g)=0$, and nondegeneracy of $B$ [L6] forces $[H_1,H_2]=0$. [L2, L5, L6, step 1.2, algebra]

3.1 No nonzero element of $\mathfrak h$ has nilpotent adjoint operator: if $x\in\mathfrak h$ has $\operatorname{ad}_x$ nilpotent, then for $y\in\mathfrak h$ the operators $\operatorname{ad}_x,\operatorname{ad}_y$ commute by step 2.1, so $\operatorname{ad}_x\operatorname{ad}_y$ is nilpotent and $B(x,y)=0$; and for $X\in\mathfrak g_\alpha$ with $\alpha\ne0$ we have $B(x,X)=0$ by the trace argument of step 2.1 with $H=x$. Hence $B(x,\mathfrak g)=0$ and [L6] gives $x=0$. [L5, L6, step 2.1, algebra]

4.1 By steps 1.3 and 3.1 every $x\in\mathfrak h$ has $x_n=0$, that is, $x=x_s$ is semisimple; with step 2.1 this makes $\mathfrak h$ a toral subalgebra by [L8]. It is maximal: if $\mathfrak t\supseteq\mathfrak h$ is toral, then $\mathfrak t$ is abelian with $[\mathfrak t,\mathfrak h]=0$, so $\mathfrak t\subseteq C_{\mathfrak g}(\mathfrak h)\subseteq N_{\mathfrak g}(\mathfrak h)=\mathfrak h$ and $\mathfrak t=\mathfrak h$. Hence $\mathfrak h$ is maximal toral, which is the converse implication. The zero algebra is covered by the convention that its zero subalgebra is both Cartan and maximal toral. The Axiom of Choice was used only through [L4]. [A1, L3, L4, L8, step 2.1, step 1.3, step 3.1] ∎
