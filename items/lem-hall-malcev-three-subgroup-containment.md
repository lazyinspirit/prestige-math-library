---
id: lem-hall-malcev-three-subgroup-containment
kind: lemma
title: The three-subgroup containment for normal subgroups
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Lemmas 10.41, 10.43 and Corollary 10.44, printed p.286
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-hall-malcev-commutator-product-identities"]
---
## Statement

For normal subgroups $A,B,C\trianglelefteq G$, $[\, [A,B],C]\le [\, [B,C],A]\,[\, [C,A],B]$.

## Facts & Assumptions

**Given:** $A,B,C$ are normal; use the preceding commutator and conjugation conventions.

[F1] Product commutators expand into conjugates of commutators; inverse commutators are obtained by inversion and conjugation ([[lem-hall-malcev-commutator-product-identities]]).

## Proof

1.1 Put $P=x[\, [x^{-1},y],z]x^{-1}$, $Q=z[\, [z^{-1},x],y]z^{-1}$ and $R=y[\, [y^{-1},z],x]y^{-1}$. Direct substitution gives $P=yxy^{-1}zyx^{-1}y^{-1}xz^{-1}x^{-1}$, $Q=xzx^{-1}yxz^{-1}x^{-1}zy^{-1}z^{-1}$, and $R=zyz^{-1}xzy^{-1}z^{-1}yx^{-1}y^{-1}$. Cancelling adjacent inverse pairs in $PQ$ gives $yxy^{-1}zyz^{-1}x^{-1}zy^{-1}z^{-1}=R^{-1}$. Thus $PQR=1$. [given, algebra]

2.1 For normal $U,V$, $[U,V]$ is normal: conjugation sends its generator $[u,v]$ to $[gug^{-1},gvg^{-1}]$. Therefore $N=[\, [B,C],A][\, [C,A],B]$ is a normal subgroup (a product of two normal subgroups is a subgroup since its factors can be interchanged). Work in $G/N$. Substituting $x\in A,y\in B,z\in C$ into step 1.1 makes $Q=R=1$, so $[\, [x^{-1},y],z]=1$. Replacing $x$ by its inverse shows that every $[a,b]$ commutes with every $c\in C$ in this quotient. [step 1.1, algebra]

3.1 If $u$ and $v$ commute with every $c\in C$ in the quotient, the product identity gives $[uv,c]=u[v,c]u^{-1}[u,c]=1$; and $[u^{-1},c]=1$ follows from $1=[uu^{-1},c]$. Consequently every finite product of the generators $[a,b]$ and their inverses centralizes $C$. Hence $[\, [A,B],C]$ has trivial image in $G/N$, which is precisely the claimed containment. This includes any of $A,B,C$ equal to $1$. [F1, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Lemmas 10.41, 10.43 and Corollary 10.44, printed p.286. Hall identity and subgroup extension correspond to draft Lemmas 10.41 and 10.43 and Corollary 10.44. The actual cancellation and extension to all subgroup elements are supplied locally.
