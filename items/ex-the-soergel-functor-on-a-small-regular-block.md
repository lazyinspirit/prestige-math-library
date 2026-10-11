---
id: ex-the-soergel-functor-on-a-small-regular-block
kind: example
title: The Soergel functor on the small regular sl_2 block
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-axiom-of-choice,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-the-antidominant-projective-and-the-soergel-functor,
       thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       thm-soergels-struktursatz-full-faithfulness-on-projectives,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       thm-bgg-reciprocity,
       def-verma-module,
       thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules,
       prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v,
       def-type-a-soergel-bimodule-for-a-simple-reflection,
       def-type-a-standard-graph-bimodules-support-filtrations-and-character]
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

Assume the Axiom of Choice inherited from the category-$\mathcal O$ suppliers.
Work in the dominant regular integral $\mathfrak{sl}_2$ block at $\lambda=0$,
with $\rho=1$, $W=\{e,s\}$ and $s\cdot0=-2$
([[def-regular-integral-category-o-block-and-its-antidominant-weight]]). Set $\mathbb k=\mathbb C$. Put
$\Delta_e=M(0)$, $\Delta_s=M(-2)=L(-2)$, $P_e=P(0)=\Delta_e$ and $P_s=P(-2)$;
the block is described by the nonsplit sequences
$$0\to L(-2)\to\Delta_e\to L(0)\to0,\qquad 0\to\Delta_e\to P_s\to\Delta_s\to0,$$
the second being the one-letter case of
[[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]]
and [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]],
and $P_e=\Delta_e$ being the dominant Verma
([[thm-bgg-reciprocity]], [[def-verma-module]]).

**The values of $V$.** Let $C=\mathbb k[x]/(x^2)$ with $\deg x=2$ be the
coinvariant algebra and $V=\operatorname{Hom}(P_s,-)$
([[def-the-antidominant-projective-and-the-soergel-functor]]), so that
$\operatorname{End}(P_s)\cong C$ by
[[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]].
Since $P_s$ has indecomposable head $L(-2)$ and $L(-2)=M(-2)$ is simple, the
left $C$-module values are
$$V(P_e)=\mathbb k=C/(x),\quad V(P_s)=C,\quad V(\Delta_e)=V(\Delta_s)=\mathbb k,\quad V(L(0))=0,\quad V(L(-2))=\mathbb k.$$
Indeed $V(\Delta_e)$ and $V(\Delta_s)$ are one-dimensional by exactness applied
to the first sequence and $V(L(-2))=\mathbb k$ from the head quotient, while
$V(L(0))=0$ because $L(0)$ is not a quotient of $P_s$; the unique
one-dimensional $C$-module is $\mathbb k$ with $x$ acting by zero.

**The projective Hom table.** With rows indexed by the source and columns by the
target, the four Hom spaces in the ordered bases $(P_e,P_s)$ are
$$\begin{pmatrix}\operatorname{Hom}(P_e,P_e)&\operatorname{Hom}(P_e,P_s)\\\operatorname{Hom}(P_s,P_e)&\operatorname{Hom}(P_s,P_s)\end{pmatrix}=\begin{pmatrix}\mathbb k&\mathbb k\\\mathbb k&C\end{pmatrix},\qquad\text{dimensions }\begin{pmatrix}1&1\\1&2\end{pmatrix}.$$
Choose the nonzero maps $i\colon P_e\to P_s$ and $p\colon P_s\to P_e$; under the
Struktursatz [[thm-soergels-struktursatz-full-faithfulness-on-projectives]]
their images in $\operatorname{Hom}_C(\mathbb k,C)=\mathbb k\,i_0$ and
$\operatorname{Hom}_C(C,\mathbb k)=\mathbb k\,p_0$ are the generators
$i_0(1)=x$ and $p_0(a+bx)=a$, and the compositions compute
$p_0i_0=0$ on $\mathbb k$ while $i_0p_0=m_x$, multiplication by $x$ on $C$
(equivalently $pi=0$ and $ip$ is a nonzero square-zero
endomorphism; rank one refers to its image under $V$ on $C$). In particular $\operatorname{End}(P_s)\cong C$ is
recovered as the full two-dimensional endomorphism algebra, and the
full-faithfulness comparison is computed on the four projective Hom spaces
rather than claimed for the whole block.

**Polynomial lifts and standard ranks.** For $S=\mathbb k[a]$ with
$s(a)=-a$, the empty-word lift is $B_e=S$ and the rank-one lift is
$$B_s=S\otimes_{\mathbb k[a^2]}S(1)$$
([[def-type-a-soergel-bimodule-for-a-simple-reflection]]); their right origin
reductions are $\mathbb k$ and $C(1)$, whose centered auxiliary degrees are
$-1,1$, and the labels $e^{-1}=e$, $s^{-1}=s$ agree with the dictionary of
[[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]].
Before reduction the standard graph ranks, in the order $(e,s)$, are $(1,0)$
for $B_e$ and $(1,1)$ for $B_s$: in the two-variable model
$B_s=\mathbb k[l,r]/(l^2-r^2)(1)$ the submodule generated by $l-r$ is free of
rank one on the graph $l=-r$ with annihilator $(l+r)$, and the quotient is free of rank one on the graph
$l=r$, with annihilator $(l-r)$
([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).
These ranks agree with the Verma-flag multiplicities $(1,0)$ of $P_e$ and
$(1,1)$ of $P_s$ at $v=1$, as predicted by
[[prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v]]; they
are taken before the graph supports coalesce at the origin, and no grading on
arbitrary category-$\mathcal O$ objects or intrinsic separated-support
filtration on $V(P)$ is asserted.
