---
id: def-csm-dk-periodic-mean-field-model
kind: definition
title: Smooth periodic finite-N and scaled mean-field phase data
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-csm-dk-hamiltonian-flow-measure]
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003), Sec. 1.1.1 and Part I
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Printed pp. 1-3 and PDF pp. 12-15: the Vlasov force average, classical N-body Hamiltonian and 1/N weak-coupling scaling.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§§1.1-1.2, printed pp. 3-5: deterministic 1/N Newton system, Liouville formulation and distinction of bounded-force regimes.'
---

## Definition

Fix an integer $d\ge1$, a side length $L>0$ in metres, a mass $m>0$ in kilograms, and a smooth even periodic pair potential $W\in C^\infty(\mathbb T_L^d;\mathbb R)$ in joules, where $\mathbb T_L^d:=(\mathbb R/L\mathbb Z)^d$ is the flat position torus and even means $W(-q)=W(q)$. For each finite integer $N\ge1$, the phase space is $(T^*\mathbb T_L^d)^N$ with canonical coordinates $z_i=(q_i,p_i)$, $q_i\in\mathbb T_L^d$ in metres and $p_i\in\mathbb R^d$ in kilogram-metres per second. In position charts obtained by lifting torus coordinates to $\mathbb R^d$, define

$$\theta_N:=\sum_{i=1}^N\sum_{a=1}^d p_i^a\,dq_i^a,\qquad \omega_N:=-d\theta_N=\sum_{i=1}^N\sum_{a=1}^d dq_i^a\wedge dp_i^a.$$

Overlaps of these position charts are translations by vectors in $L\mathbb Z^d$, with the same momentum coordinates, so $dq_i^a$ and $p_i^a$ agree on overlaps. Thus the displayed forms glue globally on $(T^*\mathbb T_L^d)^N$; $\omega_N$ is closed and nondegenerate by its displayed coordinate matrix. Both forms have action units of joule-seconds. Use the Hamiltonian convention $\iota_{X_{H_N}}\omega_N=dH_N$ of [[def-csm-dk-hamiltonian-flow-measure]]. The finite-particle Hamiltonian, with energy in joules, is

$$H_N(q_1,\ldots,q_N,p_1,\ldots,p_N)=\sum_{i=1}^{N}\frac{|p_i|^2}{2m}+\frac1N\sum_{1\le i<j\le N}W(q_i-q_j).$$

The interaction force is $K(q):=-\nabla_qW(q)$, in newtons. It is bounded and globally Lipschitz on the compact torus; evenness of $W$ makes $K$ odd and $K(0)=0$. Hamilton's equations in the canonical convention are

$$\dot q_i=\frac{p_i}{m},\qquad \dot p_i=\frac1N\sum_{j\ne i}K(q_i-q_j).$$

For any chosen momentum scale $P_0>0$ in kilogram-metres per second, define the time scale $\tau_0:=mL/P_0$ in seconds, dimensionless variables $x_i:=q_i/L\in\mathbb T^d:=(\mathbb R/\mathbb Z)^d$, $v_i:=p_i/P_0$, and $s:=t/\tau_0$. Define the dimensionless potential $\Phi(x):=mW(Lx)/P_0^2$ and force $k(x):=-\nabla_x\Phi(x)$. Then the equations become

$$x_i'=v_i,\qquad v_i'=\frac1N\sum_{j\ne i}k(x_i-x_j),$$

where prime denotes derivative with respect to dimensionless time $s$. Here
$\|Dk\|_\infty:=\sup_{x\in\mathbb T^d}\|Dk(x)\|_{\mathrm{op}}$, with operator
norm induced by the Euclidean norm, and $\|k\|_\infty:=\sup_x|k(x)|$; the
constants $A:=\|Dk\|_\infty$ and $B:=\|k\|_\infty$ are finite and
dimensionless. This is the selected smooth periodic mean-field scaling; it is
not the hard-sphere Boltzmann-Grad scaling.

## Remarks

The canonical cotangent forms are defined locally above and glued by the torus translation charts. The current draft [[def-csm-dk-hamiltonian-flow-measure]] supplies the convention $\iota_{X_H}\omega=dH$, the maximal Hamiltonian-flow terminology, and the volume/reference conventions $\Omega=\omega^n/n!$ and $|\Omega|/a_0^n$ for a fixed action scale $a_0>0$ (with its stated countable-choice assumption where its density measure is used). That supplier is a definition, so it has no proof claim; its displayed hypotheses and draft status have been inspected. Here $n=dN$, and the locally specified symplectic form and Hamiltonian above give the displayed finite-particle equations. No completeness or probability preparation is asserted by this definition.
