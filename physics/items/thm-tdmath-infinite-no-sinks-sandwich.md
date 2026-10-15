---
id: thm-tdmath-infinite-no-sinks-sandwich
kind: theorem
title: Infinite-valued no-sinks Hahn–Banach sandwich and conditional offsets
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-axiom-of-choice, def-complete-ordered-field, def-vector-space, def-linear-subspace, def-linear-independence, def-linear-basis, def-sublinear-functional, def-extended-reals, def-algebraic-dual-and-linear-functional, def-axiom-schema-of-separation, thm-hahn-banach-dominated-extension, cor-every-vector-space-has-a-basis, thm-every-independent-set-extends-to-a-basis, def-tdmath-type-offset-vector-space, lem-tdmath-type-offset-vector-space-well-defined]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-vector-space: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-linear-independence: mathematical-premise
  def-linear-basis: mathematical-premise
  def-sublinear-functional: mathematical-premise
  def-extended-reals: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  thm-hahn-banach-dominated-extension: mathematical-premise
  cor-every-vector-space-has-a-basis: mathematical-premise
  thm-every-independent-set-extends-to-a-basis: mathematical-premise
  def-tdmath-type-offset-vector-space: mathematical-premise
  lem-tdmath-type-offset-vector-space-well-defined: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "MIT 18.102, Introduction to Functional Analysis, complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf?download=1"
    - title: "D. Daners, Introduction to Functional Analysis (2017), Theorem 26.1 and proof"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf?download=1"
    - title: "G. Teschl, Topics in Real and Functional Analysis, §4.2, Theorem 4.11 and proof"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf?download=1"
---

## Statement

Assume the Axiom of Choice. Let $V$ be a real vector space and $p:V\to\mathbb R\cup\{+\infty\}$ satisfy $p(0)=0$, $p(tx)=tp(x)$ for every $t>0$, and $p(x+y)\le p(x)+p(y)$ in extended-real arithmetic. Assume **no sinks**: $p(x)<+\infty$ if and only if $p(-x)<+\infty$. Put $W:=\{x\in V:p(x)<+\infty\}$. Then $W$ is a linear subspace and there exists a real-linear $L:V\to\mathbb R$ such that

$$-p(-x)\le L(x)\le p(x)\qquad(x\in V),$$

with $-\infty\le r\le+\infty$ interpreted in the usual extended order. The result is valid in arbitrary dimension and allows $p=+\infty$ outside $W$.

For the conditional offset application, let $V=V_{\mathcal G}$ from [[def-tdmath-type-offset-vector-space]], let $F:\mathcal G\times\mathcal G\to\mathbb R\cup\{+\infty\}$ satisfy $p([e_\Gamma]-[e_{\Gamma'}])=F(\Gamma,\Gamma')$, and define $B(\Gamma):=L([e_\Gamma])$. Then $B(\Gamma\times\Gamma')=B(\Gamma)+B(\Gamma')$, $B(t\Gamma)=tB(\Gamma)$ for $t>0$, and

$$-F(\Gamma',\Gamma)\le B(\Gamma)-B(\Gamma')\le F(\Gamma,\Gamma').$$

For each $\Gamma\in\mathcal G$, let $X_\Gamma$ be a state set and $\sigma_\Gamma:X_\Gamma\to\mathbb R$ a baseline state function. If every admitted transition $(\Gamma,x)\to(\Gamma',y)$, with $x\in X_\Gamma$ and $y\in X_{\Gamma'}$, satisfies $\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)\ge F(\Gamma,\Gamma')$, then $\sigma_\Gamma(x)+B(\Gamma)$ is nondecreasing across those transitions. The existence or properties of such a cost $p$, including no-sinks, are hypotheses and are not proved by this theorem.

## Facts & Assumptions

[A1] [[def-axiom-of-choice]]: adopt the Axiom of Choice for the Hahn–Banach and basis-extension steps.

[F1] [[def-vector-space]] and [[def-linear-subspace]]: $V$ is a real vector space, and a subset closed under addition and all scalar multiples is a linear subspace.

[F2] [[def-sublinear-functional]]: a real-valued sublinear functional is positively homogeneous and subadditive.

[F3] [[thm-hahn-banach-dominated-extension]]: for real vector spaces, a subspace, a real-valued sublinear functional and a linear functional dominated on that subspace, there is a dominated linear extension to the whole space.

[F4] [[def-complete-ordered-field]]: the real field used in the one-step dominated-extension argument has the least-upper-bound property.

[F5] [[cor-every-vector-space-has-a-basis]] and [[thm-every-independent-set-extends-to-a-basis]]: under the adopted choice strength, a vector space has a basis and an independent subset extends to a basis of the ambient space.

[F6] [[def-linear-independence]] and [[def-linear-basis]]: a basis is an independent spanning set; spanning gives a finite expression for each vector, and independence makes its finite coefficient map unique.

[F7] [[def-tdmath-type-offset-vector-space]] and [[lem-tdmath-type-offset-vector-space-well-defined]]: the quotient is a real vector space with the declared product and positive-scaling relations.

[F8] [[def-extended-reals]]: the order and negation on $\mathbb R\cup\{\pm\infty\}$ are extended as defined there; for values in $\mathbb R\cup\{+\infty\}$, addition is the real sum when both are real and is $+\infty$ when either is $+\infty$, while multiplication by $t>0$ sends $+\infty$ to $+\infty$. These cases avoid the undefined extended-real operations listed in that definition.

[F9] [[def-algebraic-dual-and-linear-functional]]: a real-linear functional $L:V\to\mathbb R$ is a linear map, so $L(x+y)=L(x)+L(y)$ and $L(tx)=tL(x)$ for $x,y\in V$ and $t\in\mathbb R$.

[F10] [[def-axiom-schema-of-separation]]: since $p$ is a function on the set $V$ and $+\infty$ is in the extended-real codomain, Separation forms the subset $W=\{x\in V:p(x)<+\infty\}$ as a set.

## Proof

**Given:** [A1]–[F10] and the hypotheses on $p$.

1.1 By [F10], $W$ is a set. It contains $0$ because $p(0)=0$. If $x,y\in W$, subadditivity gives $p(x+y)\le p(x)+p(y)<+\infty$, so $x+y\in W$ by the extended-real conventions in [F8]. For $t>0$, homogeneity gives $p(tx)=tp(x)<+\infty$. If $t<0$, put $s:=-t>0$; no-sinks gives $-x\in W$, and positive homogeneity applied to $s(-x)=tx$ puts $tx$ in $W$. Also $0x=0\in W$. Thus $W$ is a linear subspace. The restriction $p|_W$ is finite-valued, positively homogeneous and subadditive, so it is a real-valued sublinear functional. [F1, F2, F8, F10, algebra]

2.1 Let $M=\{0\}\subseteq W$ and let $f_0(0)=0$. This is linear and satisfies $f_0(0)=0=p(0)$. The real ordered field is complete by [F4], as used in the one-step interval argument of the published theorem. Apply [F3] to $p|_W$ and $f_0$; it gives a linear $\ell:W\to\mathbb R$ with $\ell(x)\le p(x)$ for every $x\in W$. Applying this at $-x\in W$ yields $-\ell(x)=\ell(-x)\le p(-x)$, so $-p(-x)\le\ell(x)\le p(x)$ on $W$. [A1, F3, F4, F8, F9, step 1.1]

3.1 By [F5], choose a basis $B_W$ of $W$ and extend its independent set to a basis $B_V$ of $V$. Assign value $\ell(b)$ to $b\in B_W$ and $0$ to $b\in B_V\setminus B_W$. For any $v\in V$, [F6] gives a finite basis expression; define $L(v)$ as the same finite linear combination of assigned real values. If two expressions represented $v$, subtracting and collecting equal basis vectors would give a finite zero combination; independence in [F6] forces every collected coefficient to be zero. Thus $L(v)$ is well-defined. Concatenating finite expressions proves additivity and scalar homogeneity, so $L$ is linear in the sense of [F9]; the basis expression of any $w\in W$ uses only $B_W$, so $L|_W=\ell$. [A1, F5, F6, F9, step 2.1]

4.1 For $x\in W$, step 3.1 and step 2.1 give $-p(-x)\le L(x)\le p(x)$. If $x\notin W$, then $p(x)=+\infty$ by the definition of $W$; no-sinks implies $p(-x)=+\infty$ as well, so by [F8] the extended bounds reduce to $-\infty\le L(x)\le+\infty$. This proves the global sandwich. [F8, step 1.1, step 2.1, step 3.1]

5.1 In the type-offset application, linearity of $L$ in the sense of [F9] and the quotient relations in [F7] give $B(\Gamma\times\Gamma')=B(\Gamma)+B(\Gamma')$ and $B(t\Gamma)=tB(\Gamma)$. Apply the sandwich to $e_\Gamma-e_{\Gamma'}$ and its negative, using the assumed values of $p$, to obtain the two displayed bounds for $B(\Gamma)-B(\Gamma')$. For an admitted transition, its real baseline change is at least $F(\Gamma,\Gamma')$, so that cost value must be finite. The corrected change equals $[\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)] + B(\Gamma')-B(\Gamma)=[\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)]-L(e_\Gamma-e_{\Gamma'})$. The assumed lower bound on the baseline change and the upper sandwich bound $L(e_\Gamma-e_{\Gamma'})\le F(\Gamma,\Gamma')$ make this at least $F(\Gamma,\Gamma')-F(\Gamma,\Gamma')=0$. This proves only the stated conditional monotonicity. [F7, F9, step 4.1, algebra] ∎

## Remarks

The real-valued Hahn–Banach theorem is applied only on the finite domain $W$; the arbitrary-dimensional extension to $V$ uses a basis and its extension under Choice. When $x\notin W$, both sandwich endpoints are infinite by no-sinks. Neither the finite-dimensional strict-extension variant nor a catalyst-chain cost construction is asserted.

