---
id: fs-the-cfl-pumping-lemma-characterizes-cfls
kind: false-statement
title: "FALSE: the context-free pumping lemma characterizes the context-free languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cfls-are-not-closed-under-intersection,
       thm-cfl-closure-under-union-concatenation-star-and-homomorphism,
       thm-pdas-recognize-exactly-the-cfls]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David S. Wise, A Strong Pumping Lemma for Context-Free Languages"
      url: "https://scholarworks.iu.edu/dspace/items/1b886507-5079-4ba7-af17-958f3cf99a1a"
    - title: "Computer Science Stack Exchange, Example of a non-context-free language that nonetheless can be pumped"
      url: "https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped"
    - title: "ROIFE BLOG, [形式语言] 06 Context-free Language"
      url: "https://roife.github.io/posts/formal-languages-and-automata-06/"
---

## Statement

**False claim:** a language is context-free exactly when it satisfies the
ordinary Bar-Hillel pumping condition.

## Facts & Assumptions

**Given:** Put $K:=\{a^n b^n c^n:n\geq0\}$, let $s$ be a new symbol, and set
$$ L:=sK\cup\{s^r q:r\ne1,\ q\in\{a,b,c\}^*\}. $$

[A1] The statement refuted is: a language is context-free exactly when it satisfies the ordinary Bar-Hillel pumping condition.

[L2] The proof of [[thm-cfls-are-not-closed-under-intersection]] establishes
that $K=\{a^n b^n c^n:n\geq0\}$ is not context free.

[L3] PDA's recognize exactly the context-free languages
([[thm-pdas-recognize-exactly-the-cfls]]), and context-free languages are
closed under homomorphic image
([[thm-cfl-closure-under-union-concatenation-star-and-homomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 We verify the ordinary pumping condition with pumping length $p:=3$. Let $z=s^r q\in L$ have length at least $3$, with $q\in\{a,b,c\}^*$. If $r=0$, pump the first letter of $q$. If $r=1$, then $q\in K$, and pump the unique initial $s$. If $r\ge2$ and $q$ is nonempty, pump its first letter. In all three cases take the pumped letter as $v$ and take $w=x=\varepsilon$; pumping preserves membership because it either keeps $r\ne1$ or changes the single initial $s$ to $s^i$, which belongs to the second part of $L$ for every $i\ne1$. [given, cases]

1.2 Suppose for contradiction that $L$ were context free. Let $R:=\{sa^i b^j c^k:i,j,k\ge0\}$, which is regular. Choose a PDA for $L$ using [L3] and a DFA for $R$. The product control consisting of the PDA state and DFA state, with the same stack operation as the PDA and with epsilon moves leaving the DFA state fixed, is a PDA for $L\cap R$. Hence $L\cap R$ is context free. [L3, assume-contra, construct]

2.1 It remains to treat $z=s^r$ with $r\ge3$. For $r=3$, take $v=s^3$; for $r\ge4$, take $v=s^2$. Put $u=w=x=\varepsilon$ and let $y$ be the remaining suffix. Pumping produces respectively $s^{3i}$ or $s^{r+2(i-1)}$, whose exponent is never $1$. Thus $|vx|\ge1$, $|vwx|\le3$, and every pumped word lies in $L$. [step 1.1, cases]

2.2 By definition, $L\cap R=sK$. Apply the homomorphism that deletes the initial symbol $s$ and fixes $a,b,c$. Closure under homomorphism from [L3] would make $K$ context free, contradicting [L2]. Therefore $L$ is not context free. [L2, L3, step 1.2, discharge-contradiction]

3.1 Steps 1.1 and 2.1 show that $L$ satisfies the ordinary pumping condition, while step 2.2 shows that it is not context free. Thus [A1] is false. [A1, step 1.1, step 2.1, step 2.2] ∎
