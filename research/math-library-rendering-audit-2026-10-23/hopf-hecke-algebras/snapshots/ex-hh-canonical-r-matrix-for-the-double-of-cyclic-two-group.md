---
id: ex-hh-canonical-r-matrix-for-the-double-of-cyclic-two-group
kind: example
title: "The canonical R-matrix for the finite double of the group of order two"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-hopf-algebra-and-antipode, def-hh-leg-notation-and-quasitriangular-hopf-algebra]
forward_refs: [thm-hh-finite-double-hopf-structure-and-canonical-r]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§3.3.1, Example 3.17, PDF p. 14; §3.4.3, Proposition 3.29 and Remark 3.31, PDF p. 17: finite group doubles and canonical R"
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.2, printed pp. 65–66: algebraic R axioms and leg calculations"
verification:
  precheck: pass
---

## Example

Let $G=\{e,s\}$ with $s^2=e$, and let $p_x$ ($x\in G$) be the characteristic functions on $G$. Let $u_g$ denote the group basis symbols. Use the finite-group double convention with basis $p_x\#u_g$ and product $(p_x\#u_g)(p_y\#u_h)=\delta_{x,gyg^{-1}}p_x\#u_{gh}$. For this abelian group the product reduces to $\delta_{x,y}p_x\#u_{gh}$. The evaluation pairing $\langle p_y,u_x\rangle=\delta_{y,x}$ makes $(p_x)_{x\in G}$ and $(u_x)_{x\in G}$ dual bases. Its coproduct, counit, and antipode are
$\Delta(p_x\#u_g)=\sum_{ab=x}(p_a\#u_g)\otimes(p_b\#u_g),\quad \varepsilon(p_x\#u_g)=\delta_{x,e},\quad S(p_x\#u_g)=p_x\#u_g.$
Set $q_g:=\sum_{z\in G}p_z\#u_g$ and
$R=\sum_{x\in G}(p_x\#u_e)\otimes q_x.$
Then $D(kG)$ is a four-dimensional Hopf algebra and $R$ is its canonical quasitriangular structure.

## Facts & Assumptions

**Given:** The two-element group $G=\{e,s\}$ with multiplication $s^2=e$, the function basis $p_e,p_s$, the group basis $u_e,u_s$, and the displayed group-double structure maps.

[F1] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra has a unital associative multiplication, algebra-map coproduct and counit satisfying coassociativity/counitality, and an antipode satisfying both contractions.

[F2] [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]: $R$ is quasitriangular when it is invertible and satisfies the intertwining identity and both leg hexagons.

## Verification

**Given:** The finite set $G=\{e,s\}$ with its group law and the four basis vectors $p_x\#u_g$.

1.1 The group law is addition of exponents modulo two, so it is associative. For basis vectors, either association of a triple product is $\delta_{x,y}\delta_{y,z}p_x\#u_{gh\ell}$; bilinearity therefore makes the displayed multiplication associative. The element $1_D=\sum_xp_x\#u_e$ is a unit because $1_D(p_y\#u_h)=p_y\#u_h=(p_y\#u_h)1_D$. Thus the vector space with the stated product is a unital algebra with basis of size four. [given, F1, construct, algebra]

2.1 The formula for $\Delta$ is coassociative because both $(\Delta\otimes\operatorname{id})\Delta(p_x\#u_g)$ and $(\operatorname{id}\otimes\Delta)\Delta(p_x\#u_g)$ sum once over all triples $a,b,c\in G$ with $abc=x$. The counit contractions retain only $a=e$ or $b=e$, respectively, and return $p_x\#u_g$. The coproduct preserves multiplication: expanding $\Delta(p_x\#u_g)\Delta(p_y\#u_h)$ leaves only terms with equal first and second function indices, so it is zero if $x\ne y$ and is $\sum_{ab=x}(p_a\#u_{gh})\otimes(p_b\#u_{gh})$ if $x=y$, which equals $\Delta((p_x\#u_g)(p_y\#u_h))$. The counit is multiplicative by the same orthogonal-idempotent multiplication, and $\Delta(1_D)=1_D\otimes1_D$, $\varepsilon(1_D)=1$. [step 1.1, F1, algebra]

2.2 The elements $q_g$ satisfy $q_eq_g=q_g=q_gq_e$ and $q_gq_h=q_{gh}$. Also $q_e=1_D$. Therefore $R^2=\sum_{x,y} (p_x\#u_e)(p_y\#u_e)\otimes q_xq_y =\sum_xp_x\#u_e\otimes q_{x^2}=1_D\otimes1_D,$ so $R$ is invertible. [given, step 1.1, F2, algebra]

3.1 Since every element of $G$ is its own inverse, $S(p_x\#u_g)=p_x\#u_g$. In $m(S\otimes\operatorname{id})\Delta(p_x\#u_g)$, a summand survives exactly when $a=b$ in $ab=x$; this is impossible when $x=s$, and for $x=e$ the two surviving terms sum to $p_e\#u_e+p_s\#u_e=1_D$. The same calculation gives $m(\operatorname{id}\otimes S)\Delta(p_x\#u_g)$. These values equal $\varepsilon(p_x\#u_g)1_D$, so both antipode identities hold and $D(kG)$ is a Hopf algebra. [step 2.1, F1, algebra]

3.2 For $d=p_y\#u_g$, expanding the two sides with the displayed product gives $R\Delta(d)=\sum_{ab=y}(p_a\#u_g)\otimes(p_b\#u_{ag})$ and $\Delta^{\mathrm{op}}(d)R=\sum_{ab=y}(p_b\#u_g)\otimes(p_a\#u_{gb})$. Since $G$ is abelian, $u_{gb}=u_{bg}$; interchanging $a$ and $b$ preserves the condition $ab=y$ and makes the latter sum equal to the former. Bilinearity extends equality from the basis to all $d\in D(kG)$. [given, step 2.1, F2, algebra]

4.1 For each $g\in G$, the formula for $\Delta$ gives $\Delta(q_g)=\sum_{x\in G}\sum_{ab=x}(p_a\#u_g)\otimes(p_b\#u_g)=q_g\otimes q_g$. Hence $(\Delta\otimes\operatorname{id})(R)=\sum_{a,b\in G}(p_a\#u_e)\otimes(p_b\#u_e)\otimes q_{ab}=R_{13}R_{23}$, using $q_aq_b=q_{ab}$. Also $(\operatorname{id}\otimes\Delta)(R)=\sum_x(p_x\#u_e)\otimes q_x\otimes q_x$. Expanding $R_{13}R_{12}$ and using $p_xp_y=\delta_{x,y}p_x$ gives the same sum. Thus both quasitriangular hexagons hold. Together with invertibility from step 2.2 and the intertwining identity from step 3.2, this proves that the canonical finite tensor $R$ is quasitriangular. [given, step 2.1, step 2.2, step 3.2, F2, algebra] ∎

## Remarks

This is the explicit $C_2$ instance only. The general finite-dimensional double construction is the later HH-10 result [[thm-hh-finite-double-hopf-structure-and-canonical-r]]; no part of its proof or acceptance is assumed here.
