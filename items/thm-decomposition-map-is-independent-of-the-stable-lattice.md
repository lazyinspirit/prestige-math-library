---
id: thm-decomposition-map-is-independent-of-the-stable-lattice
kind: theorem
title: "The decomposition map is independent of the stable lattice"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

If $L$ and $L'$ are two $G$-stable $\mathcal O G$-lattices in the same
finite-dimensional $KG$-module $V$, then

$$[L/\mathfrak mL]=[L'/\mathfrak mL']$$

in the modular Grothendieck group $R_k(G)$.

## Facts & Assumptions

**Given:** A finite-dimensional $KG$-module $V$ and two $G$-stable
$\mathcal O G$-lattices $L,L'\subseteq V$.

[F1] The decomposition map is defined by taking the class of the reduction of a
stable lattice
([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]]).

[A1] Because $L$ and $L'$ are full lattices in the same $K$-space, some
integer $r\ge0$ satisfies $\pi^rL\subseteq L'\subseteq\pi^{-r}L$, where $\pi$
is a uniformizer of $\mathcal O$.

## Proof

**Proof technique:** direct.

1.1 By [A1], after replacing $(L,L')$ by $(\pi^rL,L')$ if necessary, we may assume $L\subseteq L'$. Multiplication by the scalar $\pi^r$ does not change the class of the reduction in the Grothendieck group, because $\pi^rL/\mathfrak m\pi^rL\cong L/\mathfrak mL$ as $kG$-modules. [A1, given, algebra]

2.1 Put $A:=L'/L$. Reduction of the inclusion $L\hookrightarrow L'$ has kernel $(L\cap\pi L')/\pi L$ and cokernel $L'/(L+\pi L')$. Multiplication by $\pi$ identifies the kernel with $A[\pi]:=\{a\in A:\pi a=0\}$, while the cokernel is $A/\pi A$. Thus $$[L/\pi L]-[L'/\pi L']=[A[\pi]]-[A/\pi A]$$ in $R_k(G)$. [step 1.1, algebra]

3.1 Multiplication by $\pi$ on the finite-length $\mathcal O G$-module $A$ gives exact sequences $$0\to A[\pi]\to A\to\pi A\to0,\qquad 0\to\pi A\to A\to A/\pi A\to0.$$ Their Grothendieck-group identities give $[A[\pi]]=[A/\pi A]$. Both end terms are annihilated by $\pi$, so this equality is an equality in $R_k(G)$. Step 2.1 therefore gives $[L/\mathfrak mL]=[L'/\mathfrak mL']$. [step 2.1, algebra]

4.1 Hence the Grothendieck-group class in [F1] is independent of the stable lattice. [F1, step 3.1] ∎
