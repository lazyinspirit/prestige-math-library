---
id: ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight
kind: example
title: "At $p=2$ the Heisenberg construction produces $\\operatorname{Dih}(C_4)$, not a group of exponent $2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, def-order-in-a-group, thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

At $p=2$ the Heisenberg construction produces $\operatorname{Dih}(C_4)$, not a group of exponent $2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Heisenberg group of order $p^3$ is the set $(\mathbb Z/p)^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[L1] The Heisenberg multiplication makes $(\mathbb Z/p)^3$ a nonabelian group of order $p^3$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]]).

[L2] The Heisenberg group of order $p^3$ is extraspecial, and for odd $p$ it has exponent $p$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]]).

[L3] Every nonabelian group of order $p^3$ is extraspecial ([[thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial]]).

[L4] The generalized dihedral group $\operatorname{Dih}(C_4)$ and the quaternion group $Q_8$ are extraspecial of order $8$, with six and two solutions of $x^2=1$ respectively ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L5] The two nonabelian groups of order eight are $\operatorname{Dih}(C_4)$ and $Q_8$ ([[thm-classification-of-the-nonabelian-groups-of-order-p-cubed]]).

[L6] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).


## Verification

**Proof technique:** constructive.

1.1 At $p=2$ the Heisenberg multiplication gives a nonabelian group of order eight, and the element $(1,1,0)$ has square $(0,0,1)$ and fourth power the identity, so it has order four. [F1, L1, L6, construct]

1.2 For $(a,b,c)\in(\mathbb Z/2)^3$ one has $(a,b,c)^2=(0,0,ab)$, so exactly the six elements with $ab=0$ satisfy $x^2=1$. [F1, L5, algebra]

2.1 By [L3] the group is extraspecial of order eight, and [L5] says it is isomorphic to $\operatorname{Dih}(C_4)$ or $Q_8$; [L4] distinguishes those two by the number of solutions of $x^2=1$. Step 1.2 therefore identifies the Heisenberg group at $p=2$ with $\operatorname{Dih}(C_4)$. [L3, L4, L5, step 1.2]

3.1 The element of order four from step 1.1 shows that the exponent is four, so the odd-$p$ exponent-$p$ conclusion does not extend to $p=2$. [L2, L6, step 1.1, discharge-construct] ∎
