---
id: cex-rational-modules-need-not-be-semisimple-in-characteristic-p
kind: counterexample
title: "Rational modules need not be semisimple in characteristic p"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 38
deps: [def-axiom-of-choice, def-primitive-vector-of-a-rational-representation, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-symmetric-algebra-of-a-vector-space, def-unipotent-algebraic-group, def-weight-and-dominant-weight-of-a-rational-representation, ex-fundamental-sl2-modules-in-characteristic-p, lem-sl2-structure-and-root-coordinates, thm-complete-reducibility-of-rational-modules-in-characteristic-zero, thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups, thm-simple-rational-representations-have-a-highest-weight]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 12 (12.55) and Exercise 12-9, printed pp. 249 and 253; Ch. 22 (22.33), printed pp. 473-474; (22.46)-(22.47), printed p. 480"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the paragraph after Theorem 39(e) (in characteristic p the module V' can have a nonzero maximal submodule V'')"
---
## Statement refuted

Assume the Axiom of Choice inherited from the named suppliers.
The claim that every finite-dimensional rational representation of a split
reductive group is semisimple is false. For every prime $p$ the following is a
counterexample
([[thm-complete-reducibility-of-rational-modules-in-characteristic-zero]]).
Let $k$ be a field of characteristic $p$ and let $G=\mathrm{SL}_2$ act on
$V=S^p(k^2)$, the symmetric power of the standard two-dimensional
representation, with $T_2$ acting through the characters $p,p-2,\dots,-p$
([[lem-sl2-structure-and-root-coordinates]],
[[ex-fundamental-sl2-modules-in-characteristic-p]]). Let $W\subseteq V$ be the
span of $e_1^p$ and $e_2^p$. Then $W$ is a two-dimensional simple submodule (the
Frobenius twist of $L(1)$), every simple submodule of $V$ equals $W$, so the
socle of $V$ is $W$, and $\dim_kV=p+1>2$. Hence $V$ is a nonsemisimple
finite-dimensional rational representation of the split reductive group
$\mathrm{SL}_2$, even though the dominant weights still classify the simple
rational representations
([[thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups]]).

## Facts & Assumptions

**Given:** AC; a prime $p$, a field $k$ of characteristic $p$, $G=\mathrm{SL}_2$ with diagonal torus $T_2$ and upper unipotent group $U^+$, and $V=S^p(k^2)$ with its standard basis monomials $e_1^ae_2^{p-a}$.

[F1] *The Frobenius-twist submodule.* $W=ke_1^p\oplus ke_2^p$ is a two-dimensional simple $G$-submodule of $V$ isomorphic to $L(p)$, with $W_{p\chi}=ke_1^p$; it is the Frobenius twist of $L(1)=k^2$, and $e_1^p$ generates $W$ as a $G$-module ([[ex-fundamental-sl2-modules-in-characteristic-p]]).

[F2] *Primitive vectors of simple modules.* Every simple rational representation of $G$ contains a primitive vector, unique up to a nonzero scalar, whose weight is its highest weight ([[thm-simple-rational-representations-have-a-highest-weight]], [[def-primitive-vector-of-a-rational-representation]]).

[F3] *Weights and the unipotent action on $V$.* The monomials $e_1^ae_2^{p-a}$ ($0\le a\le p$) form a $k$-basis of $V$ of $T_2$-eigenvectors, with $e_1^ae_2^{p-a}$ of weight $(2a-p)\chi=(p-2(p-a))\chi$, and $u_\alpha(t)\cdot e_1^ae_2^{p-a}=e_1^a(e_2+te_1)^{p-a}$ for $t\in k$, where $u_\alpha(t)=\binom{1\ t}{0\ 1}$ acts by $e_1\mapsto e_1$ and $e_2\mapsto e_2+te_1$ ([[lem-sl2-structure-and-root-coordinates]], [[def-symmetric-algebra-of-a-vector-space]], [[def-weight-and-dominant-weight-of-a-rational-representation]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F4] *Classification.* The simple rational representations of $G$ are classified up to isomorphism by their dominant highest weights ([[thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups]]).

## Counterexample

**Given:** AC; a prime $p$, a field $k$ of characteristic $p$, $G=\mathrm{SL}_2$ with diagonal torus $T_2$ and upper unipotent group $U^+$, and $V=S^p(k^2)$ with its standard basis monomials $e_1^ae_2^{p-a}$.

**Proof technique:** direct.

1.1 The basis monomials $e_1^ae_2^{p-a}$ of $V$ are $T_2$-eigenvectors of weights $(2a-p)\chi$ for $a=0,\dots,p$, i.e. of the characters $-p,-p+2,\dots,p$; each weight space of $V$ is therefore one-dimensional and spanned by a single monomial, and $T_2$ acts through the characters $p,p-2,\dots,-p$ as claimed. [F3]

2.1 The primitive vectors of $V$ are exactly the nonzero multiples of $e_1^p$. Indeed, a primitive vector is a nonzero $T_2$-eigenvector fixed by $U^+$ ([[def-unipotent-algebraic-group]], [[def-primitive-vector-of-a-rational-representation]]), hence by step 1.1 is a nonzero multiple of some monomial $m_a=e_1^ae_2^{p-a}$; and $u_\alpha(t)\cdot m_a=e_1^a(e_2+te_1)^{p-a}$ has, as the coefficient of $e_1^p$, the term $t^{p-a}$ (the $i=p-a$ summand, with binomial coefficient $1$). If $a<p$, the original monomial has zero coefficient of $e_1^p$, whereas the translated coefficient is the nonzero polynomial $t^{p-a}$ in $k[t]$. Thus fixedness over every base algebra excludes $a<p$. For $a=p$, $u_\alpha(t)\cdot e_1^p=e_1^p$ for all $t$, so $e_1^p$ is fixed. [F3, given, algebra]

3.1 Let $S\subseteq V$ be a nonzero submodule; if $S$ is simple, then by [F2] it contains a primitive vector $v$, which by step 2.1 is a nonzero multiple of $e_1^p$; hence $e_1^p\in S$. By [F1] the $G$-submodule generated by $e_1^p$ is $W$ (it is nonzero and contained in the simple module $W$), so $W\subseteq S$, and simplicity of $S$ gives $S=W$. Therefore $W$ is the unique simple submodule of $V$ and the socle of $V$ is $W$. Since $\dim_kV=p+1$ while $\dim_kW=2$, a semisimple $V$ would be the sum of its simple submodules, namely $W$, which is impossible; hence $V$ is not semisimple. [F1, F2, step 1.1, step 2.1]

4.1 The representation $V=S^p(k^2)$ is finite-dimensional and rational, $G=\mathrm{SL}_2$ is a split reductive group of characteristic $p$, and $V$ is not semisimple by step 3.1, while its simple submodules and those of every rational $G$-module are still classified by the dominant weights by [F4]. This refutes the claim that every finite-dimensional rational representation of a split reductive group is semisimple. [F4, step 3.1] ∎

## Remarks

- The failure has the same source as the Frobenius twist of the example: the submodule $W$ generated by $e_1^p$ is only two-dimensional inside the $(p+1)$-dimensional symmetric power, so the top-weight vector does not generate $V$ in characteristic $p$.
- The statement refers to the characteristic-zero theorem [[thm-complete-reducibility-of-rational-modules-in-characteristic-zero]]; the counterexample is compatible with the classification theorem, which only parametrizes simple modules and says nothing about extensions.
