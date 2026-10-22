---
id: lem-four-square-values-have-valuation-one-at-dyadic-places
kind: lemma
title: Four-square values of valuation one at a dyadic place
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
sources:
  references:
    - title: Carl Siegel, Darstellung total positiver Zahlen durch Quadrate, Mathematische Zeitschrift 11 (1921), pages 258–259, Hilfssatz 4
      url: https://doi.org/10.1007/BF01203627
    - title: Göttingen Digitisation Centre, original article scan
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN266833020_0011/LOG_0022.pdf
---

## Statement

Let $K$ be a field of characteristic zero with a discrete valuation $v:K^\times\to\mathbb Z$, normalized to be surjective, whose residue field is finite of characteristic $2$. There is a nonzero element $r\in K$ with $v(r)=1$ which is a sum of four squares in $K$. In particular this holds for the valuation on a number field at every prime ideal dividing $2$. No completeness assumption or global arithmetic principle is required.

## Facts & Assumptions

**Given:** The field and valuation in the statement. Write $\mathcal O=\{0\}\cup\{x:v(x)\ge0\}$, choose a uniformizer $\lambda$ with $v(\lambda)=1$, and put $e=v(2)>0$. Congruence modulo $\lambda^j$ means that the difference has valuation at least $j$.

## Proof

1.1 The squaring map on the finite residue field is bijective: in characteristic $2$, $x^2-y^2=(x-y)^2$, so it is injective, and finiteness makes it surjective. Consequently every unit $\nu\in\mathcal O^\times$ can be written modulo $\lambda^2$ as $$\nu\equiv a^2+c^2\lambda\pmod{\lambda^2},$$ where $a\in\mathcal O^\times$ and $c$ is either zero or a unit. Indeed choose $a$ lifting the square root of the residue of $\nu$. The element $(\nu-a^2)/\lambda$ is integral; if its residue is zero take $c=0$, and otherwise lift its nonzero square root to a unit $c$. [given, construct, algebra]

1.2 If $e$ is odd, choose $\beta=\lambda^{(e-1)/2}$. Then $$r=2/\beta^2=(1/\beta)^2+(1/\beta)^2+0^2+0^2$$ has valuation $e-2v(\beta)=1$. This proves the assertion in the odd case. [given, construct, algebra]

2.1 Now let $e$ be even, so $e\ge2$. Put $\beta=\lambda^{e/2}$ and $\nu=2/\beta^2\in\mathcal O^\times$, and choose $a,c$ as in step 1.1. If $c$ is a unit, set $$q=1^2+1^2+(\beta a)^2+0^2.$$ The congruence for $\nu$ gives $$q=2+\beta^2a^2\equiv4-\beta^2c^2\lambda\pmod{\lambda^{e+2}}.$$ Here $v(4)=2e\ge e+2$, while $v(\beta^2c^2\lambda)=e+1$. Thus $v(q)=e+1$, and dividing each of the four displayed coordinates by $\beta$ expresses $r=q/\beta^2$, of valuation $1$, as a sum of four squares. [step 1.1, construct, algebra]

3.1 If instead $c=0$, set $$q=1^2+(1+\lambda)^2+(\beta a)^2+\lambda^2.$$ Now $\beta^2a^2\equiv2\pmod{\lambda^{e+2}}$, whence $$q=2+2\lambda+2\lambda^2+\beta^2a^2\equiv4+2\lambda+2\lambda^2\pmod{\lambda^{e+2}}.$$ Of these terms, $2\lambda$ has valuation $e+1$, while $4$ and $2\lambda^2$ have valuation at least $e+2$. Therefore again $v(q)=e+1$, and $r=q/\beta^2$ is a sum of four squares with valuation $1$. The odd case and the two exhaustive even cases prove the assertion. [step 1.1, step 1.2, step 2.1, construct, algebra] ∎

## Remarks

This proves the local valuation construction used inside Siegel's Hilfssatz 4. It does not assert that every element of a dyadic field is a sum of four squares, nor does it supply the number-field local–global principle needed for the full four-square theorem. Since the construction lies in the original field, its nonzero value is positive at every real embedding whenever $K$ is a number field.
