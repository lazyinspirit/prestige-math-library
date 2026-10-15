---
id: cex-tdmath-bare-contact-interface-incoherent
kind: counterexample
title: The bare join coordinates do not determine contact coherence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-thermal-contact-hypotheses]
dependency_roles:
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A, pp. 51–54"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement refuted

The coordinate set formula for a thermal join, without an accessibility or thermal-equilibrium specification, forces C1 join coherence.

## Facts & Assumptions

**Given:** The coordinate formula for a join, with no interpretation of accessibility or thermal equivalence imposed by that formula.

[F1] [[def-tdmath-thermal-contact-hypotheses]]: the join domain is determined by the coordinate sum $u=u_1+u_2$, while C1 is a separate relation-level assumption.

## Counterexample

1.1 Let $\Gamma_n=\mathbb R^{n+1}$ for each integer $n\ge1$, retaining $n$ work coordinates and total energy $u$, and give its type the primitive amount $n$ and weight $w_n=n$. Joining $x=(u,v_1,\ldots,v_n)$ and $y=(u',v'_1,\ldots,v'_m)$ gives the tagged state $J_{n,m}(x,y)=(u+u',v_1,\ldots,v_n,v'_1,\ldots,v'_m)$ in $\Gamma_{n+m}$. Thus every join has exactly the supplier's coordinate-set formula; nested joins use energy addition and concatenation of work coordinates. Encode $x\in\Gamma_n$ as $\mathsf J_n(x)=n e_{(n,x)}$. These encodings distinguish a separated pair from its joined tag and give each the same total weight. [F1, given, construct]

2.1 On equal-mass finite encoded compounds, define accessibility $\prec$ to be the smallest equivalence relation containing, for every $x\in\Gamma_1$, the pair $2e_{(1,x)}\prec2e_{(2,J_{1,1}(x,x))}$ and its reverse; all other equivalence classes are singletons. This is a relation on compounds, with equality on singleton classes. Define $\sim_T$ by the supplier's rule of mutual accessibility of the separated pair and its joined state; do not assign it independently. Fix $x\in\Gamma_1$ and put $z=J_{1,1}(x,x)\in\Gamma_2$. The specified pair gives $x\sim_T x$. But the two compounds used to test $z\sim_T x$ are $2e_{(2,z)}+e_{(1,x)}$ and $3e_{(3,J_{2,1}(z,x))}$. They are distinct compounds of mass three, hence lie in distinct singleton equivalence classes, since every nontrivial generating pair has mass two. Therefore $z\not\sim_T x$, and C1 fails. [F1, step 1.1, construct, algebra]

3.1 On the same coordinate and encoded type data, instead take all equal-mass compounds mutually accessible. The same defining rule now makes every thermal comparison true, so C1 holds. These are countermodels only to the implication from the coordinate-set formula: neither is asserted to satisfy all of A1–A7, S1–S3 or T1–T5. Both models respect the supplier's actual definition of thermal equivalence through accessibility; their different C1 outcomes prove that the bare coordinates do not determine coherence. [F1, step 1.1, step 2.1] ∎
