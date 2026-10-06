---
id: lem-graded-invariants-of-localization-at-an-invariant-element
kind: lemma
title: Invariants of a localization at an invariant element
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
justified_by: []
aliases: []
deps: [thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, lem-reynolds-operator-and-invariant-subring-properties, def-rational-action-on-affine-variety, def-graded-ring-and-graded-module, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 3, Section 3.2(iii) and the proof of Theorem 3.4"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "The proof of Theorem 5.3 (localization computation for the affine charts)"
---

## Statement

Assume AC inherited from the Reynolds-operator suppliers. Let $G$ be a complex reductive affine algebraic group acting rationally on a commutative $\mathbb C$-algebra $A$ by algebra automorphisms, with Reynolds operator $R_A:A\to A^G$ ([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]). Suppose $A=\bigoplus_{n\in\mathbb Z}A_n$ is graded and $G$ acts by graded algebra automorphisms, with $R_A$ preserving degrees. Then for every homogeneous $f\in A^G$ one has $(A_f)^G=(A^G)_f$ compatibly with the grading, and consequently $((A_f)_0)^G=(A^G)_{(f)}$, where $(A^G)_{(f)}=((A^G)_f)_0$ is the degree-zero part of the localization.

## Facts & Assumptions

**Given:** A complex reductive affine algebraic group $G$, a rational $G$-algebra $A$ that is graded with $G$ acting by graded algebra automorphisms, the Reynolds operator $R_A$, and a homogeneous invariant element $f\in A^G$.

[F1] *Reynolds operator.* $R_A:A\to A^G$ is $G$-equivariant, restricts to the identity on $A^G$, is $A^G$-linear and idempotent, and its image is exactly $A^G$; moreover every rational $G$-module is a direct sum of simple submodules, so every $G$-stable submodule of a rational $G$-module has a $G$-stable complement. ([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]], [[lem-reynolds-operator-and-invariant-subring-properties]])

[F2] *Rational modules.* A rational $G$-module is one in which every vector lies in a finite-dimensional $G$-stable subspace on which $G$ acts by a morphism; a $G$-stable subspace of a rational $G$-module is again rational, and a direct sum of rational modules is rational. ([[def-rational-action-on-affine-variety]])

[F3] *Graded conventions.* In a graded ring, multiplication by a homogeneous element shifts degrees, so the kernel of multiplication by $f^k$ on a graded module is a graded submodule; the localization $A_f$ of a graded ring at a homogeneous element carries the induced $\mathbb Z$-grading, and the action of $G$ by graded automorphisms on $A$ extends to $A_f$ because $f$ is invariant. ([[def-graded-ring-and-graded-module]])

[F4] *AC.* The Axiom of Choice is inherited from the Reynolds-operator and complete-reducibility suppliers and is used only through them. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 *The localized Reynolds operator.* Define $\widetilde R:A_f\to A_f$ by $\widetilde R(a/f^n)=R_A(a)/f^n$. This is well defined: if $a/f^n=b/f^m$, then $f^k(f^ma-f^nb)=0$ in $A$ for some $k\ge0$, and applying the $A^G$-linear operator $R_A$ to this relation (with the invariant elements $f^{k+m}$, $f^{k+n}$ pulled out) gives $f^{k+m}R_A(a)=f^{k+n}R_A(b)$, so $R_A(a)/f^n=R_A(b)/f^m$ in $A_f$. The map $\widetilde R$ is $(A^G)_f$-linear: for $h\in A^G$ and $r\ge0$, one has $h/f^r\in(A^G)_f$ and $\widetilde R((h/f^r)(a/f^n))=R_A(ha)/f^{r+n}=(h/f^r)\widetilde R(a/f^n)$. [F1, F3, algebra]

1.2 *The converse inclusion.* Let $K=\{b\in A: f^kb=0\text{ for some }k\ge0\}$ be the kernel of the localization map $A\to A_f$; it is a $G$-stable submodule because $f$ is invariant and $G$ acts by automorphisms, and it is a rational $G$-module as a submodule of the rational module $A$ by [F2]. By complete reducibility there is a $G$-stable complement $C$ with $A=K\oplus C$; in particular $K\cap C=0$. The complement is supplied by the complete-reducibility theorem, so this step inherits the Axiom of Choice and makes no new selection [F4]. [F1, F2, F3, F4]

2.1 *Image and fixed points.* $\widetilde R$ is idempotent and has image exactly $(A^G)_f$: the image is contained in $(A^G)_f$ because $R_A(a)\in A^G$, and an element $h/f^n$ with $h\in A^G$ is fixed by $\widetilde R$. Consequently $(A^G)_f\subseteq(A_f)^G$, since $(A^G)_f$ consists of invariant fractions. [F1, step 1.1]

3.1 Let $x\in(A_f)^G$ and write $x=a/f^n$ with $a=k+c$, $k\in K$, $c\in C$; then $x=c/f^n$. For every $g\in G$ the element $gc-c$ lies in $C$, while the equality $gc/f^n=c/f^n$ in $A_f$ says precisely that $f^m(gc-c)=0$ for some $m$, i.e. $gc-c\in K$. Hence $gc-c\in K\cap C=0$, so $gc=c$ for all $g$ and $c\in A^G$; thus $x=c/f^n\in(A^G)_f$. With step 2.1 this gives $(A_f)^G=(A^G)_f$. [F1, step 1.2, algebra]

4.1 *Gradings.* The action is by graded automorphisms, so the invariant subspace of a graded rational $G$-module is graded; both sides of $(A_f)^G=(A^G)_f$ are graded submodules of the graded ring $A_f$ (the localization of the graded subalgebra $A^G$ at the homogeneous element $f$ is graded, and $(A_f)^G$ is graded). Taking degree-zero parts of the equality gives $((A_f)_0)^G=((A^G)_f)_0=(A^G)_{(f)}$. The hypothesis that $R_A$ preserves degrees is what makes the Reynolds projection compatible with the grading in the computation of step 1.1, and the identity above is compatible with the gradings. [F3, step 3.1, algebra]

5.1 Steps 2.1 and 3.1 establish $(A_f)^G=(A^G)_f$, and step 4.1 gives the graded consequence $((A_f)_0)^G=(A^G)_{(f)}$, as claimed. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **No domain hypothesis.** The proof uses complete reducibility to split off the $f$-torsion of $A$; this replaces the clearing-denominators step of the classical treatment and makes the identity valid for an arbitrary graded rational $G$-algebra, without assuming that $A$ is a domain.
- **Degree preservation.** The hypothesis that $R_A$ preserves degrees enters only through the compatibility of the invariant identifications with the $\mathbb Z$-grading; it holds for the natural graded actions used on this page.
