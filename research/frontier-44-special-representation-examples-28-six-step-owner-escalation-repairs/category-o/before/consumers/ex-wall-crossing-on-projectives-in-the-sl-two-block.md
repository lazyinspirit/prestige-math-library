---
id: ex-wall-crossing-on-projectives-in-the-sl-two-block
kind: example
title: Wall-crossing on the projectives in the sl_2 block
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-axiom-of-choice,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-the-antidominant-projective-and-the-soergel-functor,
       thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       thm-soergels-struktursatz-full-faithfulness-on-projectives,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       thm-bgg-reciprocity,
       def-verma-module,
       def-wall-crossing-functor-and-unit-counit,
       thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall]
generation:
  role: example
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.2, Lemma 1 and its use in the proofs of Lemmas 3-4; Section 2.6, Lemma 10(i): <P(x^{-1}.0)> = C_x(1)<M(0)> and the associated Verma multiplicity statement"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Definition 4.17, Theorems 4.18-4.19, Remark 4.20 and Corollary 4.21, printed pp. 10-11; source uses right modules, converted here to left modules over commutative C"
---

## Example

Assume the inherited Axiom of Choice. Work in the regular integral
$\mathfrak{sl}_2$ block with $\lambda=0$, $\rho=1$, so $s\cdot0=-2$ and the
singular wall weight is $\mu=-1$ with $\mu+\rho=0$. The indecomposable
projectives are $P_e=M(0)=\Delta_e$ and $P_s=P(-2)$, whose Verma flag is
$\Delta_e,\Delta_s$ with each standard once
([[def-regular-integral-category-o-block-and-its-antidominant-weight]],
[[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]]).

Set $\mathbb k=\mathbb C$.

**On the standards.** By
[[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]]
the wall-crossing functor $\theta_s$ of
[[def-wall-crossing-functor-and-unit-counit]] satisfies
$\theta_s\Delta_e=\theta_s\Delta_s=P_s$, the nonsplit two-step extension of
$\Delta_s$ by $\Delta_e$: the one-letter reduced word
$w=s$ gives $\theta_s\Delta(\lambda)=P(s\cdot\lambda)$ as its unique new
summand, and the flag computation $\Delta_e+\Delta_s$ shows the summand is the
whole object.

**On the projectives.** Exactness of $\theta_s$
([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]) applied
to the flag $0\to\Delta_e\to P_s\to\Delta_s\to0$ shows that $\theta_sP_s$ has
standard flag multiplicities $(\Delta_e,\Delta_s)=(2,2)$. Every projective in
this two-simple block is a direct sum of copies of $P_e$ and $P_s$, whose flag
multiplicities are $(1,0)$ and $(1,1)$ by BGG reciprocity
([[thm-bgg-reciprocity]]); writing $\theta_sP_s\cong
P_e^{\oplus a}\oplus P_s^{\oplus b}$, the equations $a+b=2$ and $b=2$ give
$a=0$, $b=2$, so
$$\theta_sP_e\cong P_s,\qquad \theta_sP_s\cong P_s\oplus P_s.$$
In the ordered projective bases $(P_e,P_s)$, with columns indexed by the input,
the matrix of $\theta_s$ is therefore $\begin{pmatrix}0&0\\1&2\end{pmatrix}$.
On the Soergel side $C=\mathbb k[x]/(x^2)$ with $\deg x=2$, $C^s=\mathbb k$,
$V(P_e)=\mathbb k$ and $V(P_s)=C$; the wall-crossing theorem
[[thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule]]
gives
$$V\theta_s(P_e)=C\otimes_{C^s}\mathbb k\cong C,\qquad V\theta_s(P_s)=C\otimes_{C^s}C\cong C\oplus C$$
as left $C$-modules, the left $C$-acting on the first factor, and the
projective Struktursatz
[[thm-soergels-struktursatz-full-faithfulness-on-projectives]] reflects these
isomorphisms back to the projective identities above, all objects involved
being projective.

**Dimension comparison.** The tensor $C\otimes_{C^s}C\cong C\otimes_{\mathbb k}C$
is the four-dimensional coinvariant bimodule $=2|W|$ with $|W|=2$, explicitly
spanned by the four elements $1\otimes1,1\otimes x,x\otimes1,x\otimes x$; the
isomorphism $C\oplus C\to C\otimes_{\mathbb k}C$ of left $C$-modules sends
$(u,v)$ to $u\otimes1+v\otimes x$. By contrast the right-reduced polynomial
$B_s=\mathbb k[a]\otimes_{\mathbb k[a^2]}\mathbb k[a](1)$ is only
two-dimensional, with generator degrees $-1,1$ after centering; the right-reduced polynomial module is $C(1)$, whereas the
coinvariant bimodule $C\otimes_{\mathbb k}C$ has dimension four. The former
models $V\theta_s(P_e)$ and the latter the tensor operator applied to
$V(P_s)=C$.
