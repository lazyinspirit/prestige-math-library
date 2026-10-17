---
id: def-regular-minimum-energy-path-in-a-collision-free-tube
kind: definition
title: "Regular minimum-energy paths on a declared collision-free tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-jacobian-matrix-and-gradient
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(5): normal-gradient MEP condition and intrinsic string evolution"
---

## Definition

Let $d\ge2$, let $C_{\rm bad}\subseteq\mathbb R^d$ be the model's prescribed set of forbidden configurations, and let $U\subseteq\mathbb R^d\setminus C_{\rm bad}$ be open. Call $U$ a **declared collision-free tube** when it is the supplied open domain on which the potential is defined; no physical interpretation of the choice of $U$ is implied. Let $V\in C^4(U,\mathbb R)$, using the $C^k$ convention of [[def-ck-and-multi-index-notation-in-several-variables]], and let $a,b\in U$. A **regular path with fixed endpoints** is $R\in C^1([0,1],U;\mathbb R^d)$ such that $R(0)=a$, $R(1)=b$, and $R'(s)\ne0$ for every $s\in[0,1]$ (with one-sided derivatives at the endpoints). Its unit tangent and normal projector are

$$t(s):=\frac{R'(s)}{\|R'(s)\|_2},\qquad P_{t(s)}^\perp:=I-t(s)t(s)^T.$$

The path is a **regular minimum-energy path (MEP)** when

$$P_{t(s)}^\perp\nabla V(R(s))=0\qquad(0\le s\le1),$$

where $\nabla V$ is the gradient in [[def-jacobian-matrix-and-gradient]]. Thus the gradient is tangent to the path; at points where it vanishes the equation still holds. The endpoints are fixed data and need not be local minima unless that is added as a hypothesis. This is a conditional mathematical definition and makes no claim about reaction rates, physical mechanisms, or uniqueness.
