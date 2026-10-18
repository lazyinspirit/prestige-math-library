---
id: lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra
kind: lemma
title: "Complete coderivations form a filtered differential graded Lie algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-coefficient-complete-codifferential-deformation
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Marco Manetti, Deformation theory via differential graded Lie algebras, §1"
      url: "https://arxiv.org/pdf/math/0507284"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§1.2, 2.2, 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Use [[def-coefficient-complete-codifferential-deformation]]. The order filtration on $E$ is separated and complete, with $F^pE\,F^qE\subseteq F^{p+q}E$. The coderivations form a closed graded Lie subalgebra for

$$[P,Q]=PQ-(-1)^{|P||Q|}QP.$$

With $dT=[D,T]$, the positive-order space $\mathfrak g=F^1\mathfrak l$ is a complete filtered differential graded Lie algebra, with $F^p\mathfrak g=F^p\mathfrak l$ for $p\ge1$, $d(F^p\mathfrak g)\subseteq F^p\mathfrak g$, and $[F^p\mathfrak g,F^q\mathfrak g]\subseteq F^{p+q}\mathfrak g$.

## Facts & Assumptions

**Given:** The coefficient-complete carrier, endomorphism filtration, coderivations, and square-zero degree-one $D$ in the stated definition.

[F1] [[def-coefficient-complete-codifferential-deformation]] specifies the completed carrier, order filtration, closed coderivation equations, and square-zero degree-one operator $D$.

## Proof

1.1 For a uniformly Cauchy sequence $T_m$ in $E$, each $T_m(c)$ is Cauchy in $C_B$, because $T_m-T_j\in F^pE$ eventually for every $p$. Define $T(c)=\lim_m T_m(c)$. Limits preserve addition, $B$-linearity, and each closed $F^qC_B$. Thus $T$ preserves the filtration and is continuous. If $T_m-T_j\in F^pE$ for all sufficiently large $j$, passing to the limit on every $F^qC_B$ gives $T_m-T\in F^pE$. More directly, a compatible family of cosets in $E/F^pE$ determines compatible evaluation cosets on each $c$ in every $C_B/F^nC_B$, without choosing simultaneous representatives. Their unique limit defines $T$; evaluating on $F^qC_B$ modulo $F^{p+q}$ proves that its class is the prescribed one in $E/F^pE$. This proves inverse-limit completeness as well; if $T\in\bigcap_pF^pE$, every $T(c)$ belongs to $\bigcap_pF^pC_B=0$, proving separation. [F1, given, construct]

2.1 If $P\in F^pE$ and $Q\in F^qE$, then $PQ(F^rC_B)\subseteq P(F^{q+r}C_B)\subseteq F^{p+q+r}C_B$, proving multiplicativity. The coderivation equation, the counit equation, and evaluation at $1_C$ are closed conditions: reduce each equation modulo $F^n$ in its explicitly completed target, where sufficiently close maps agree. Consequently $\mathfrak l$ and every $F^p\mathfrak l$ are closed and complete in their induced filtration. [F1, step 1.1, algebra]

3.1 Put $p=|P|$, $q=|Q|$. For coderivations, the graded tensor composition rule gives $\Delta PQ=(PQ\otimes1+P\otimes Q+(-1)^{pq}Q\otimes P+1\otimes PQ)\Delta$. Subtracting $(-1)^{pq}\Delta QP$ cancels the two mixed terms and gives $\Delta[P,Q]=([P,Q]\otimes1+1\otimes[P,Q])\Delta$. Also $[P,Q](1_C)=0$ and $\epsilon[P,Q]=0$. Thus coderivations are closed under the commutator, and multiplicativity proves the additive filtration bound. [F1, step 2.1, algebra]

4.1 The commutator is graded skew because $[P,Q]=-(-1)^{pq}[Q,P]$. For $|R|=r$, direct expansion of $[P,[Q,R]]$ is $PQR-(-1)^{qr}PRQ-(-1)^{p(q+r)}QRP+(-1)^{p(q+r)+qr}RQP$. The expansion of $\bigl[ [P,Q],R\bigr]$ is $PQR-(-1)^{pq}QPR-(-1)^{(p+q)r}RPQ+(-1)^{(p+q)r+pq}RQP$. The expansion of $(-1)^{pq}[Q,[P,R]]$ is $(-1)^{pq}QPR-(-1)^{pq+pr}QRP-(-1)^{qr}PRQ+(-1)^{qr+pr}RPQ$. The $QPR$ and $RPQ$ terms cancel in the last two expressions; the other four agree with the first expression. This proves the graded Jacobi identity in derivation form, with all signs explicit. [step 3.1, algebra]

5.1 For homogeneous $T$ of degree $t$, expanding $[D,[D,T]]$ gives $D^2T-TD^2$, since the two $DTD$ terms have coefficients $-(-1)^t$ and $+(-1)^t$. Hence $d^2T=0$. Substituting $P=D$ into the Jacobi identity proved in step 4.1 gives $d[P,Q]=[dP,Q]+(-1)^{|P|}[P,dQ]$. Because $D$ preserves each coefficient filtration, composition with $D$ and hence $d$ preserve every $F^pE$ and every $F^p\mathfrak l$. [F1, given, step 4.1, algebra]

6.1 The preceding steps prove all graded Lie, differential, completeness, and filtration axioms on $F^1\mathfrak l$. In each quotient by $F^n$, any bracket with at least $n$ positive-order entries vanishes by the additive bound. Thus the positive filtration is pronilpotent as well as complete, as claimed. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
