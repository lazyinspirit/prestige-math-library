---
id: cex-torsion-free-nilpotent-group-with-torsion-in-abelianization
kind: counterexample
title: Torsion-free does not mean torsion-free lower-central factors
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Remark 13.83(2), p.484
status: published
origin: pipeline
proof_strategy: direct
deps: ["ex-bass-dimension-of-the-discrete-heisenberg-group", "lem-finite-lower-central-coordinate-systems-exist"]
---
## Statement refuted

False claim: every lower-central factor of a torsion-free nilpotent group is torsion-free.

For each fixed integer $p\ge2$, the subgroup $G=\{(a,pb,c):a,b,c\in\mathbb Z\}$ of the integer Heisenberg group refutes this claim: it is torsion-free and has $G/[G,G]\cong\mathbb Z^2\oplus\mathbb Z/p\mathbb Z$.

## Facts & Assumptions

**Given:** Use the Heisenberg triple multiplication; p is a fixed integer at least two.

[F1] The triple product has central coordinate c+c prime+a b prime and commutator central coordinate a b prime-a prime b ([[ex-bass-dimension-of-the-discrete-heisenberg-group]]).

[F2] Mixed lower-central coordinates retain finite cyclic residue coordinates even when the group is torsion-free ([[lem-finite-lower-central-coordinate-systems-exist]]).

## Counterexample

1.1 The product of (a,pb,c) and (a prime,pb prime,c prime) is $(a+a^{\prime},p(b+b^{\prime}),c+c^{\prime}+pab^{\prime})$, and the inverse is $(-a,-pb,-c+pab)$. Thus G is a subgroup. Set x=(1,0,0), y=(0,p,0), z=(0,0,1). Then $x^a y^b z^k=(a,pb,pab+k)$, giving a unique normal form and a finite generating list x,y,z. [F1, algebra]

2.1 Commutators are $(0,0,p(ab^{\prime}-a^{\prime}b))$, and $[x,y]=z^p$. Thus $[G,G]=\langle z^p\rangle$: every commutator lies there and z^p is a commutator. This subgroup is central and nontrivial, so G is nilpotent of class two. The map $\psi(a,pb,c)=(a,b,c\bmod p)$ is an onto homomorphism to $\mathbb Z^2\oplus\mathbb Z/p\mathbb Z$, since the extra product term pab prime vanishes modulo p. Its kernel is exactly $\langle z^p\rangle$. The induced quotient map is therefore a bijective homomorphism, with injectivity given by this kernel calculation. [F1, step 1.1]

3.1 For a positive integer m, repeated multiplication gives $(a,pb,c)^m=(ma,mpb,mc+pab\,m(m-1)/2)$; induction follows by adding c+p(ma)b at the next multiplication. If this power is the identity, ma=mpb=0 forces a=b=0, and then mc=0 forces c=0. Hence every nonidentity element has infinite order. Nevertheless z[G,G] has order exactly p: z^j belongs to <z^p> exactly when p divides j. Since $p\ge2$, this is nontrivial torsion in the abelianization. [step 1.1, step 2.1, algebra]

4.1 For the mixed lower-central form choose first-layer lifts x,y,z, with the z exponent reduced to a residue r in {0,...,p-1}, and second-layer generator z^p. For a normal exponent k divide k=pq+r; then $x^a y^b z^k=x^a y^b z^r(z^p)^q$. The identity is the zero tuple. Thus the p-th power of the finite factor lift is a nontrivial carry into layer two, exactly as retained by F2. Setting p=1 would remove the torsion and is explicitly excluded. [F2, step 1.1, step 3.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Remark 13.83(2), p.484. Revised Remark 13.83(2) supplies this family. The subgroup, torsion-free power calculation, exact commutator subgroup and quotient map are all verified locally.
