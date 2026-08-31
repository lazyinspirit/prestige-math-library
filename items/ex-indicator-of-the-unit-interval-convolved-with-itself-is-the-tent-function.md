---
id: ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function
kind: example
title: "$\\mathbf{1}_{[0,1]} * \\mathbf{1}_{[0,1]}$ is the tent function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]
landmark: false
proof_strategy: "Compute the overlap length of $[0,1]$ and $[x-1,x]$ case by case. Then compare the resulting support with the A-page support theorem."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Example

Let $f := \mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then

$$ (f*f)(x) = \int_{\mathbb{R}} \mathbf{1}_{[0,1]}(x-y)\mathbf{1}_{[0,1]}(y)\,dy $$

is the tent function

$$ (f*f)(x)= \begin{cases} 0,& x \le 0,\\ x,& 0 \le x \le 1,\\ 2-x,& 1 \le x \le 2,\\ 0,& x \ge 2. \end{cases} $$

## Facts & Assumptions

**Given:** The indicator $f=\mathbf{1}_{[0,1]}$.

[L1] $L^1$ convolution exists almost everywhere
([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

[L2] The support of a convolution lies in the closure of the support sumset
([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]).

## Verification

**Proof technique:** direct.

1.1 For fixed $x$, the integrand is $1$ exactly when [L1, given, algebra]
$y \in [0,1] \cap [x-1,x]$. Therefore $(f*f)(x)$ is the length of that overlap
interval. [L1, given, algebra]

2.1 If $0 \le x \le 1$, the overlap is $[0,x]$, so $(f*f)(x)=x$. If [step 1.1, algebra]
$1 \le x \le 2$, the overlap is $[x-1,1]$, so $(f*f)(x)=2-x$. For
$x \le 0$ or $x \ge 2$, there is no overlap, so $(f*f)(x)=0$. [step 1.1, algebra]

3.1 Since $\operatorname{supp}(f)=[0,1]$, [L2] predicts support inside [L2, step 2.1]
$[0,1]+[0,1]=[0,2]$, exactly as the explicit computation shows. [L2, step 2.1] ∎