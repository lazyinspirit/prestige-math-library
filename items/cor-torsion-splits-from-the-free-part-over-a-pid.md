---
id: cor-torsion-splits-from-the-free-part-over-a-pid
kind: corollary
title: "A finitely generated PID module is its torsion submodule direct-summed with a finite free module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-torsion-and-primary-components-are-submodules-over-a-domain, thm-invariant-factor-decomposition-over-a-pid, def-free-module-on-a-set-and-standard-basis]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

If $M$ is finitely generated over a PID $R$, then

$$M\cong\operatorname{Tor}(M)\oplus R^r$$

for some $r\ge0$. A finitely generated PID module is its torsion submodule direct-summed with a finite free module. The torsion submodule is canonical; a free complement need not be.

## Facts & Assumptions

**Given:** The torsion submodule from [[prop-torsion-and-primary-components-are-submodules-over-a-domain]] and finite free modules as in [[def-free-module-on-a-set-and-standard-basis]].

[L1] Every finitely generated PID module is a finite free module direct-summed with cyclic torsion quotients ([[thm-invariant-factor-decomposition-over-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 In [L1], every cyclic quotient $R/(a_i)$ is torsion, and every torsion element has zero component in the free summand because a free module over a domain is torsion-free. Thus the direct sum of the cyclic quotients is exactly $\operatorname{Tor}(M)$. [L1, given, algebra]

2.1 Substituting that identification into the invariant-factor decomposition gives $M\cong\operatorname{Tor}(M)\oplus R^r$. It includes pure torsion when $r=0$, pure free modules when $\operatorname{Tor}(M)=0$, and the zero module when both vanish. [step 1.1]

3.1 The torsion submodule is canonical because it is defined by $M$ alone, while a free complement is not. Suppose $a\in R$ is a nonzero nonunit and put $M=R\oplus R/(a)$. Since $R$ is a domain, an element $(x,y+(a))$ killed by some nonzero scalar has $x=0$, and $a$ kills every $(0,y+(a))$; hence $\operatorname{Tor}(M)=0\oplus R/(a)$. Both $C_1=R\,(1,0+(a))$ and $C_2=R\,(1,1+(a))$ are free of rank one, because $r(1,\ast)=0$ forces $r=0$, and each meets $\operatorname{Tor}(M)$ only in $0$ while $(x,y+(a))=(0,(y-x)+(a))+x\,(1,1+(a))$ shows $\operatorname{Tor}(M)+C_2=M$ and likewise for $C_1$. They are distinct: $(1,1+(a))\in C_2$ lies in $C_1$ only if $a\mid1$, contrary to $a$ being a nonunit. [step 2.1, given, algebra] ∎
